<script lang="ts">
  import { Col, Container, Row, Card, CardBody, Form, FormGroup, Input, Button, Spinner } from "sveltestrap";
  import { form, field } from "svelte-forms";
  import { required, min, matchField } from "svelte-forms/validators";
  import { capitalize } from "lodash-es";
  import { onMount } from "svelte";
  import { customValidator } from "$lib/utils/form-validators";
  import { t } from "$lib/i18n/translation";
  import { reqSignUp } from "$lib/services/auth-service";
  import Avatar from "./Avatar.svelte";
  import { goto } from "$app/navigation";

  const username = field("username", "", [required(), customValidator(min(4), $t("validation.min", { min: 4 }))]);
  const password = field("password", "", [required(), customValidator(min(8), $t("validation.min", { min: 8 }))]);
  const passwordConfirm = field("passwordConfirm", "", [customValidator(matchField(password), $t("validation.passwordMatch"))]);
  const pform = form(username, password);

  let sending = false;

  let fileInput;
  let imageBase64 = "";

  onMount(() => {
    pform.validate();
    password.subscribe((v) => passwordConfirm.validate());
  });

  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      imageBase64 = e.target.result.toString();
    };
  };

  async function submit() {
    await pform.validate();
    if ($pform.valid) {
      sending = true;
      let res = await reqSignUp($username.value, $password.value, imageBase64);
      sending = false;
      if (!res.error) {
        goto("/");
      }
    }
  }
</script>

<input style="display: none;" bind:this={fileInput} on:change={(e) => onFileSelected(e)} type="file" accept="image/png, image/jpeg" />

<div class="root">
  <div class="container">
    <Container>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }} xxl={{ size: 4, offset: 4 }}>
          <Card>
            <CardBody>
              <div class="center">
                <Avatar onClick={() => fileInput.click()} width={100} src={imageBase64} text={$username.value} />
              </div>
              <small class="center">{$t("text.clickToSelect")}</small>
              <!-- svelte-ignore component-name-lowercase -->
              <form autocomplete="off" on:submit|preventDefault={submit}>
                <input type="submit" hidden />
                <FormGroup floating label={$t("user.username")}>
                  <Input
                    bind:value={$username.value}
                    valid={$username.valid}
                    invalid={!$username.valid}
                    feedback={$username.errors.map((v) => capitalize(v))}
                  />
                </FormGroup>

                <FormGroup floating label={$t("user.password")}>
                  <Input
                    bind:value={$password.value}
                    valid={$password.valid}
                    invalid={!$password.valid}
                    type="password"
                    feedback={$password.errors.map((v) => capitalize(v))}
                  />
                </FormGroup>
                <FormGroup floating label={$t("user.passwordConfirm")}>
                  <Input
                    bind:value={$passwordConfirm.value}
                    valid={$passwordConfirm.valid}
                    invalid={!$passwordConfirm.valid}
                    type="password"
                    feedback={$passwordConfirm.errors.map((v) => capitalize(v))}
                  />
                </FormGroup>
                <div class="center">
                  {#if sending}
                    <Spinner color="primary" />
                  {:else}
                    <Button disabled={!$pform.valid} on:click={submit} type="button" color="primary" style="margin: auto;">Sign-Up</Button>
                  {/if}
                </div>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
</div>

<style>
  .root {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .container {
    min-width: 400px;
    margin: auto;
  }
</style>
