<template>
<div>
    <b-navbar id="navb" toggleable="lg" class="flxMenu">
        <b-button v-b-toggle.sidebar-no-header class="no-button">
            <!-- <b-icon-list ></b-icon-list> -->
        </b-button>
        <b-nav-item-dropdown right class="mginLeft">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content >
                <em>
                    <b-icon-person-fill ></b-icon-person-fill>
                </em>
            </template>
            <b-dropdown-item disabled='disabled'>{{ usr_name }}</b-dropdown-item>
            <b-dropdown-item v-on:click="logout()">Cerrar Sesion</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-navbar>
</div>
</template>

<script>
export default {
    name: 'nav_bar',
    data() {
        return {
            usr_name: ''
        }
    },
    mounted() {
        if (this.$session.exists()) {
            this.usr_name = this.$session.get('username')
        }else{
            this.usr_name = "Admin"
        }
    },
    beforeCreate: function() {
        if (!this.$session.exists()) {
            this.$router.push('/')
        }
    },
    methods: {
        logout: function () {
            this.$session.destroy()
            this.$router.push('/')
        }
    }
}
</script>

<style>
.flxMenu{
    display: flex !important;
    justify-content: space-between !important;
}
.md-theme-default a:not(.md-button) {
    color: #1a1b1c !important;
    color: var(--md-theme-default-primary-on-background, #1a1b1c) !important;
}
.navbar-light {
    background-color: #7ccdff !important;
}
.content-wrapper {
    background-color: #006BB7 !important;
}
.no-button{
    background-color: #7ccdff !important;
    border-color: #7ccdff !important;
}
</style>