<template>
    <v-col cols="4" class="board-column">
        <v-card color="#2E3136" class="table">
            <v-layout justify-center="true">
                <v-card-actions>
                    <v-card-title>{{ tableName }}</v-card-title>
                </v-card-actions>
            </v-layout>

            <draggable :group="{ name: 'tables' }" v-model="itemArray" @change="addToQeueu" class="task">
                <BoardTask
                        v-for="item in itemArray"
                        v-bind:key="item.subpartid"
                        v-bind:name="item.subpartname"
                        v-bind:description="item.description"
                        v-bind:end-date="item.enddate"
                        v-bind:subpart-id="item.subpartid"
                        v-bind:part-id="item.partid"
                        v-bind:enum-table-name="enumTableName"
                        v-bind:project-id="projectId"
                />
            </draggable>

            <CreateTask class="task"
                v-bind:table-name="enumTableName"
            />
            <div ref="editTask"></div>
        </v-card>
    </v-col>
</template>

<script>
    import BoardTask from "./BoardTask";
    import draggable from "vuedraggable";
    import CreateTask from "./CreateTask";

    export default {
        name: "BoardTable",
        components: {
            CreateTask,
            BoardTask,
            draggable
        },
        props: {
            tableName: String,
            enumTableName: String,
            items: Array,
            projectId: String
        },
        data() {
            return {
                itemArray: this.items,
                queueArray: []
            };
        },
        methods: {
          addToQeueu: function (value) {
              if(value.added){
                if(value.added.element)
                {
                  this.queueArray.push(value.added.element);
                  while(this.queueArray.length !== 0)
                  {
                    this.updateWatch();
                  }
                }
              }
          },
          updateWatch: function () {
            let comp = this;
            if(this.queueArray.length !== 0)
            {
              for (let i = 0; i < this.queueArray.length; i++) {
                  let element = {
                      element: {
                          subpartid: this.queueArray[i].subpartid,
                          description: this.queueArray[i].description,
                          subpartname: this.queueArray[i].subpartname,
                          enddate: this.queueArray[i].enddate,
                          partid: this.queueArray[i].partid
                      },
                      action: "update",
                      type: "task"
                  };
                  comp.$root.webSocket.sendJson(element);
              }
              this.queueArray = [];
            }
          }
        },
        watch: {
            queueArray: function () {
                this.updateWatch();
            }
        },
        mounted() {
            this.itemArray = this.items;
        }
    };
</script>

<style scoped>
    >>> .v-card__title {
        color: white;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .board-container {
        padding: 1px;
    }

    .plus-table:hover {
        transition: background-color 1s ease !important;
    }

    .plus-table:hover {
        background-color: #5e5e5e !important;
    }

    .task {
        padding-left: 2%;
        padding-right: 2%;
        padding-bottom: 2%;
    }
</style>
