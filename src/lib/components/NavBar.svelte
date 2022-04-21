<script lang="ts">
import { reqSignOut, user } from '$lib/services/auth-service';
import { LogOutIcon } from "svelte-feather-icons"

    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      Dropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem
    } from 'sveltestrap';
import Avatar from './Avatar.svelte';
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }
  </script>
  
  <Navbar color="primary" light>
    <NavbarBrand  style="color:white" href="/">Todo List</NavbarBrand>
    
    <Dropdown>
        <DropdownToggle style="background-color: transparent;border-color: transparent;box-shadow:none;" caret><Avatar src={$user.avatar} text={$user.username}></Avatar></DropdownToggle>
        <DropdownMenu>
          <DropdownItem on:click={()=>reqSignOut()}><LogOutIcon/><span style="margin-left: 15px;">Logout</span></DropdownItem>          
        </DropdownMenu>
      </Dropdown>
  </Navbar>