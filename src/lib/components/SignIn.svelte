<script lang="ts">
    import { Col, Container, Row, Card, CardBody, Form, FormGroup, Input, Button, Spinner } from "sveltestrap";
    import { form, field } from "svelte-forms";
    import { required } from "svelte-forms/validators";
    import { capitalize } from "lodash-es";
    import { onMount } from "svelte";    
    import { t } from "$lib/i18n/translation";
    import { reqSignIn } from "$lib/services/auth-service";
    import { LockIcon } from 'svelte-feather-icons'
  import { showSnackbar } from "$lib/services/snackbar-service";
  
    const username = field("username", "", [required()]);
    const password = field("password", "", [required()]);    
    const pform = form(username, password);
  
    let sending = false;
  
    onMount(() => {
      pform.validate();     
    });  
   
    async function submit() {    
      await pform.validate();
      if ($pform.valid) {
        sending = true;
        let res = await reqSignIn($username.value, $password.value);        
        sending = false;
        if(res.error){
          showSnackbar(res.error)
        }
      }
    }
  </script>  
  
  <div class="root">
    <div class="container">
      <Container>
        <Row>
          <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }} xxl={{ size: 4, offset: 4 }}>
            <Card>
              <CardBody>
                <div class="center" style="margin-bottom: 15px;">
                  <LockIcon size="60"></LockIcon>
                </div>
                
                <Form>
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
                  <div class="center">
                    {#if sending}
                      <Spinner color="primary" />
                    {:else}
                      <Button disabled={!$pform.valid} on:click={submit} type="button" color="primary" style="margin: auto;">Sign-Up</Button>
                    {/if}
                  </div>
                </Form>
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
  