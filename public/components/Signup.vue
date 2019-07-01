<template>
  <v-form ref="signup-form" v-model="valid" lazy-validation>
    <v-text-field 
      v-for="field in fields" 
      v-model="field.name" 
      :label="field.label"
      :required="field.required">
    </v-text-field>
  </v-form>
</template>

<script>
  export default {
    data: () => {
      return {
        valid: true,
        params: { 
          firstname: '',
          lastname: '',
          email: '',
          password: '',
        },
        fields: [
          { name: 'params.firstname', label: 'First Name', type: 'text', required: true },
          { name: 'params.lastname', label: 'Last Name', type: 'text', required: true },
          { name: 'params.email', label: 'Email', type: 'email', required: true },
          { name: 'params.password', label: 'Password', type: 'password', required: true },
        ],
      };
    },
  };
</script>
