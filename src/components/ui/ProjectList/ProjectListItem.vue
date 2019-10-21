<template>
        <li>
            <div class="box" @click="setActive">
                <router-link style="color: white; text-decoration: none" :key="projectName" :to="{ name: 'project', params: {projectName: projectName } }">
                <div class="content">
                    <div class="contentText" @click="setActive">
                        {{ projectName }}
                    </div>
                </div>
                </router-link>
            </div>
        </li>
</template>

<script>
    export default {
        name: "ProjectList",
        props: {
            projectName: String
        },
        methods: {
            setActive: function(event) {
                let allBoxes = document.getElementsByClassName("content");
                let allTextBoxes = document.getElementsByClassName("contentText");
                for (let e = 0; e < allBoxes.length; e++) {
                    allBoxes[e].classList.remove("selected");
                    allTextBoxes[e].classList.remove("selected");
                }
                event.target.classList.add("selected");
                event.target.parentElement.classList.add("selected");
            }
        }
    }
</script>

<style scoped>
li {
    text-decoration: none;
    list-style-type: none;
    text-align: center;
}
.content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    line-height:100%;
    height:100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.contentText {
    transition: all 1s ease;
    font-family: monospace;
    font-size: 20px;
    width: 1ch;
    overflow: hidden;
    white-space: nowrap;
}

.box {
    transition: all 1s ease;
    background-color: #2E3136;
    position: relative;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 5%;
    border-radius: 50px;
}
.box:before {
    content: "";
    display: block;
    padding-top: 100%;
}

    .box:hover {
        border-radius: 15px;
        cursor: pointer;
        background-color: #7289DA;
    }

    .selected {
        border-radius: 15px;
        cursor: pointer;
        background-color: #7289DA;
    }
</style>