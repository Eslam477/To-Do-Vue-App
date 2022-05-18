<template>
    <div>
        <h1>Add task</h1>
        <section>
            <form @submit.prevent="form_submit()">
                <div class="form-group">
                    <label for="titel">Titel</label>
                    <input type="text" name="titel" class="form-control" v-model="task_titel" required>
                </div>
                <div class="form-group mt-3">
                    <label for="description">Description</label>
                    <textarea name="description" rows="10" class="form-control" v-model="task_description"></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100 mt-3">Add task</button>
            </form>
        </section>
    </div>
</template>

<script>
import axios from 'axios'
export default {
name : 'Add',
data(){
    return{
        task_titel:'',
        task_description: ''
    }
},
methods:{
    form_submit(){
        if(this.task_titel != ''){
            axios.post('http://localhost:5000/api/tasks/add', {
                titel: this.task_titel,
                description: this.task_description
            }).then((response)=>{
                console.log(response.status)
                if(response.status == 201){
                    this.$router.push({name:'ToDo'})
                }
                })
        }else{
            console.error('Something went wrong')
        }
    }
}
}
</script>