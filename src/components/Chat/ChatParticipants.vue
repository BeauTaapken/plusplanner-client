<template>
    <v-container class="chat-participants">
        <h2>Chatparticipants</h2>
        <Participant v-for="participant in participants"
                     v-bind:key="participant.userid"
                     v-bind:id="participant.userid"
                     v-bind:name="participant.name"
                     v-bind:image="participant.image"

        />
    </v-container>
</template>

<script>
    import Participant from "./Participant";

    export default {
        name: "ChatParticipants",
        components: {Participant},
        data() {
            return {
                participants: []
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
    }
</style>