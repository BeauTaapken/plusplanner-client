<template>
    <div class="component-item">
        <div class="component-header dropdown" @click="this.targetDrop">
            <h2 class="drop-text">{{ componentName }}</h2>
            <h2 class="drop-icon"> <i class="fas fa-angle-left"></i> </h2>
        </div>
        <ul class="drop-content">
            <ComponentListItem
            v-for="item in componentItem"
            v-bind:key="item.itemname"
            v-bind:item-name="item.itemname"
            v-bind:component-name="componentName"
            />
        </ul>
    </div>
</template>

<script>
    import ComponentListItem from "./ComponentListItem";
    export default {
        name: "ComponentList",
        components: {ComponentListItem},
        props: {
            componentName: String,
            componentItem: Array
        },
        mounted() {
            this.checkDrop();
        },
        methods: {
            targetDrop: function() {
                let componentItems = document.getElementsByClassName('component-item');
                let resultComponent;
                findComponent: for(let i = 0; i < componentItems.length; i++)
                {
                    for(let j = 0; j < componentItems[i].getElementsByTagName('h2').length; i++)
                    {
                        if(componentItems[i].getElementsByTagName('h2')[j].innerHTML === this.componentName)
                        {
                            resultComponent = componentItems[i];
                            break findComponent;
                        }
                    }
                }

                let icon = resultComponent.getElementsByClassName('drop-icon')[0];
                let content = resultComponent.getElementsByClassName('drop-content')[0];
                if(icon.getElementsByTagName('i')[0].classList.contains('fa-angle-left'))
                {
                    icon.getElementsByTagName('i')[0].classList.remove('fa-angle-left');
                    icon.getElementsByTagName('i')[0].classList.add('fa-angle-down');
                    content.style.display = 'inline';
                }
                else
                {
                    icon.getElementsByTagName('i')[0].classList.add('fa-angle-left');
                    icon.getElementsByTagName('i')[0].classList.remove('fa-angle-down');
                    content.style.display = 'none';
                }
            },
            checkDrop: function() {
                let componentItems = document.getElementsByClassName('component-item');
                let resultComponent;
                findComponent: for(let i = 0; i < componentItems.length; i++)
                {
                    for(let j = 0; j < componentItems[i].getElementsByTagName('h2').length; i++)
                    {
                        if(componentItems[i].getElementsByTagName('h2')[j].innerHTML === this.$route.params.componentName)
                        {
                            resultComponent = componentItems[i];
                            break findComponent;
                        }
                    }
                }

                let icon = resultComponent.getElementsByClassName('drop-icon')[0];
                icon.getElementsByTagName('i')[0].classList.remove('fa-angle-left');
                icon.getElementsByTagName('i')[0].classList.add('fa-angle-down');
                let content = resultComponent.getElementsByClassName('drop-content')[0];
                content.style.display = "inline";
            }
        }
    }
</script>

<style scoped>
    .component-header {
        padding-left: 5%;
        padding-right: 5%;
        text-align: left;
        border-bottom: 1px solid #1E2124;
        border-top: 1px solid #1E2124;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        height: auto;
        overflow: hidden;
        transition: background-color 1s ease;
    }

    .drop-content {
        display: none;
        height: auto;
    }

    .component-header:hover {
        cursor: pointer;
        background-color: #282b2f;
    }

    ul{
        margin: 0;
        padding: 0;
    }

    .drop-text {
        float: left;
        width: 90%;
    }
    .drop-icon {
        float: left;
        width: 10%;
    }

    .drop-header {
        float: left;
    }

</style>