<template>
<div>
  <div id="addForm">
    <h2>Add Task</h2>
        <form id="addDetailsForm" @submit.prevent="handleSubmit">
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
  <div id="builds">
      <b-table striped hover :items="items"></b-table>
  </div>
</div>
</template>

<script>
    import fetch from 'isomorphic-unfetch'
    let postApplicationDetails = 'http://localhost:8007/inserProjectAndApplication'
    let getApplicationDetails = 'http://localhost:8007/getProjectAndApplications'
    export default{
        mounted(){
            this.getProjectData()
        },
        data(){
            return{
                items: [{
                        'Application Id' : '',
                        'Application Name': '',
                        'Project Id': '',
                        'Project Name': '',
                        "Create Job": ''
                    }],
                data:{
                    projectName: '',
                    applicationName: '',
                    projectId: '',
                    applicationId: '',
                }
            }
        },
        methods:{
            getProjectData(){
                fetch(getApplicationDetails)
                .then((response) =>{
                    response.json()
                    .then(data => {
                        console.log(data,"final")
                        let table_data = []
                        if(data.data.length != 0){
                            data.data.forEach(element => {
                                let temp_obj = {
                                    'Application Id' : element.application_id,
                                    'Application Name': element.application_name,
                                    'Project Id': element.project_id,
                                    'Project Name': element.project_name,
                                    "Create Job": `<button id ="create_job">Create</button>`
                                }
                                table_data.push(temp_obj)
                            });
                            this.items = table_data
                        }
                        
                    })
                })
                .catch((err)=>{
                    console.log(err)
                })
            },
            handleSubmit: function(event){
                
                console.log(this.data,"dataaaaa")
                let payload = {
                    project_name: this.data.projectName,
                    application_name: this.data.applicationName,
                    project_id: this.data.projectId,
                    application_id: this.data.applicationId
                }
                fetch(postApplicationDetails,{
                    method: 'POST',
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then((res) => {
                    console.log(res.body,"working")
                    this.data.projectName = ''
                    this.data.applicationName = ''
                    this.data.projectId = ''
                    this.data.applicationId = ''
                    this.getProjectData()
                })
                .catch((err) => {
                    console.log(err, "error ")
                })
                console.log("====")
                // this.$http.post(apiEndPoint, this.data)
                // .then(resp => {
                //     console.log(resp,"")
                // })
                // .catch(err =>{
                //     console.log(err)
                // })
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