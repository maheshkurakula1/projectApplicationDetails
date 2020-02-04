<template>
  <div id="addForm">
    <h2>Add Task</h2>
        <form>
            <label>Project Name</label>
            <input type='text' required /><br>
            <label>Application Name</label>
            <input type='text' required /><br>
            <label>Project Id</label>
            <input type='text' required /><br>
            <label>Application Id</label>
            <input type='text' required /><br>
            <button type='submit'>Submit</button>
        </form>
  </div>
</template>

<script>

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
    margin: 20px 0 10px;
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