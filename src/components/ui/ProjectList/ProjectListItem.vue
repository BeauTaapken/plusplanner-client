<template>
    <li>
        <div @click="setActive" class="box">
            <router-link :key="projectName" :to="{ name: 'project', params: {projectName: projectName } }"
                         style="color: white; text-decoration: none">
                <div class="content">
                    <div @click="setActive" class="contentText">{{ projectName }}</div>
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
        mounted() {
            this.checkActive();
        },
        methods: {
            setActive: function (event) {
                let allBoxes = document.getElementsByClassName("content");
                let allTextBoxes = document.getElementsByClassName("contentText");
                for (let e = 0; e < allBoxes.length; e++) {
                    allBoxes[e].classList.remove("selected");
                    allTextBoxes[e].classList.remove("selected");
                }
                event.target.classList.add("selected");
                event.target.parentElement.classList.add("selected");
            },
            checkActive: function () {
                let allProjects = document.getElementsByClassName('box');

                if(allProjects.length < 0)
                {
                    return;
                }
                for(let i = 0; i < allProjects.length; i++)
                {
                    if(allProjects[i].getElementsByClassName('contentText')[0].innerHTML === this.$route.params.projectName)
                    {
                        allProjects[i].getElementsByClassName('contentText')[0].classList.add('selected');
                        allProjects[i].getElementsByClassName('content')[0].classList.add('selected');
                    }
                }
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
        line-height: 100%;
        height: 100%;
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