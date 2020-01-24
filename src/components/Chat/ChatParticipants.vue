<template>
    <v-container class="chat-participants">
        <h2>Chatparticipants</h2>
        <Participant v-for="participant in participants"
                     v-bind:key="participant.userid"
                     v-bind:id="participant.userid"
                     v-bind:name="participant.username"
                     v-bind:image="participant.photo"

        />
    </v-container>
</template>

<script>
    import Participant from "./Participant";
    import { mapGetters } from "vuex"

    export default {
        name: "ChatParticipants",
        components: {Participant},
        data() {
            return {
                participants: []
            }
        },
        created() {
            let data = this.getProjectByName(this.$route.params.projectName);
            let comp = this;
            for(let i = 0; i < data.users.length; i++)
            {
                comp.participants.push(data.users[i].user);
            }

        },
        computed: mapGetters("project", ['getProjectByName']),
    }
</script>

<style scoped>
    h2 {
        text-align: center;
    }
</style>