<template>
  <div id="addForm">
    <h2>Add Task</h2>
        <form @submit.prevent="handleSubmit()">
            <label>Project</label>
            <input type='text' v-model="data.projectName" required /><br>
            <label>Application Name</label>
            <input type='text' v-model="data.applicationName" required /><br>
            <label>Project Id</label>
            <input type='text' v-model="data.projectId" required /><br>
            <label>Application Id</label>
            <input type='text' v-model="data.applicationId" required /><br>
            <button type='submit'>Submit</button>
        </form>
  </div>
</template>

<script>
    let apiEndPoint = 'http://localhost:3003/sampleRoute'
    export default{
        data(){
            return{
                data:{
                    projectName: '',
                    applicationName: '',
                    projectId: '',
                    applicationId: '',
                }
            }
        },
        methods:{
            handleSubmit(){
                console.log(this.data,this.$http,"====")
                this.$http.post(apiEndPoint, this.data)
                .then(resp => {
                    console.log(resp,"")
                })
                .catch(err =>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style>
#addForm *{
    box-sizing: border-box;
}

#addForm{
    max-width: 500px;
    margin: 20px auto;
}

label{
    margin: 20px -136px 50px;
    position: absolute;
}

input[type='text']{
    margin-left: 5px;
    margin-right:5px;
    margin-top: 10px;
    width: 50%;
    padding: 8px;
}

button[type='submit']{
    margin-left: 5px;
    margin-right:5px;
    margin-top: 10px;
    width: 25%;
    padding: 8px
}

</style>