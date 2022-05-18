<template>
    <div>
        <h1>Achievements</h1>
            <section class="mt-2 data-section">
                <div :class="spinner_state + ' spinner-border'" role="status">
                    <span class="sr-only"></span>
                </div>

                    <table :class="table_state + ' table text-center h-100'" v-if="tasks.length > 0">
                        <thead class="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Created At</th>
                                <th>completion</th>
                            </tr>
                        </thead>
                        <tbody class="table-striped">
                            <tr v-for="(task, index) in tasks" :key="task._id">
                                <th>{{ index + 1 }}</th>
                                <th>{{ task.titel }}</th>
                                <th>{{ task.description }}</th>
                                <th>{{ Date(task.createdAt) }}</th>
                                <th><button class="btn btn-danger completion-btn" @click="delet_achievements(task._id)">Delete</button></th>
                            </tr>
                        </tbody>
                    </table>

                    <div v-else :class="table_state + ' text-center message_blank'">
                        <h3>You don't have any achievements yet</h3>
                        <p>Browse your to-do list for the day</p>
                    </div>
            </section>
    </div>
</template>


<script>
import axios from "axios"

export default {
    name: 'Todo',
    data(){
        return{
        tasks:[],
        spinner_state: 'show',
        table_state: 'hidden'
        }
    },
    methods: {
        getTasks() {
            axios.get('http://localhost:5000/api/tasks/achievements').then((r) => {
                r.data.map((e) => {
                    this.tasks.push(e);
                }
                )
                this.spinner_state = 'hidden'
                this.table_state = 'show'
            }).catch((err)=>{
                if(err.response.status === 502){
                    this.spinner_state = 'hidden'
                    this.table_state = 'show'
                }else{
                    this.spinner_state = 'hidden'
                    this.table_state = 'show'
                    alert(`undefined error code: ${err.response.status}`)
                }
            });
        },
        delet_achievements(id){
            axios.delete(`http://localhost:5000/api/tasks/delete/${id}`)
            this.$router.go(0)
        }
    },
    created() {
        this.getTasks();
    }
}
</script>