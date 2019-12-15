<template>
    <v-col cols="4" class="board-column">
        <v-card color="#2E3136" class="table">
            <v-layout justify-center="true">
                <v-card-actions>
                    <v-card-title>{{ tableName }}</v-card-title>
                </v-card-actions>
            </v-layout>

            <draggable :group="{ name: 'tables' }" v-model="itemArray" @change="addToQeueu">
                <BoardTask
                        v-for="item in itemArray"
                        v-bind:key="item.subpartid"
                        v-bind:name="item.subpartname"
                        v-bind:description="item.description"
                        v-bind:end-date="item.enddate"
                        v-bind:subpart-id="item.subpartid"
                        v-bind:part-id="item.partid"
                        v-bind:table-name="tableName"
                />
            </draggable>

            <CreateTask
                    class="plus-table"
                    v-bind:key="'Plus'"
                    v-bind:name="'+'"
                    v-bind:table-name="tableName"
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
            items: Array
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
                let element = `{"subpartid": "${
                        this.queueArray[i]["subpartid"]
                }","description":"${this.queueArray[i]["description"]}","subpartname":"${
                        this.queueArray[i]["subpartname"]
                }","enddate":"${this.queueArray[i]["enddate"]}","state":"${
                        this.tableName
                }","partid":${this.$parent.partId} }`;
                let json = JSON.parse(`{"action": "update", "type": "task"}`);
                json['element'] = JSON.parse(element);
                comp.$parent.Websocket.send(JSON.stringify(json));
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

    .board-column {
        text-align: center;
    }

    .table {
        padding: 20px;
        text-align: center;
    }

    .plus-table:hover {
        transition: background-color 1s ease !important;
    }

    .plus-table:hover {
        background-color: #5e5e5e !important;
    }
</style>
