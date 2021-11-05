<template>
  <div class="ml-2">
    <div class="text-h6 text-secondary text-bold">
      SOXPROX Features
    </div>
    <div
      style=""
    >
     <div class="flex ml-2" v-for="feature in features" :key="feature.title">
       <div class="col-1/12">
         <q-img src="../../assets/star.svg" width="17px"/>
       </div>
       <div class="col col-11/12 ml-2">
         <div class="font-bold">{{feature.title}}</div>
         <div class="text-justify">
           {{feature.description}}
         </div>
       </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      features: [
        {
          title: 'Quickly and easily plan a meeting',
          description: 'Simple user interface guides you step by step through everything you need for a successful meeting'
        },
        {
          title: 'Set an agenda',
          description: 'Quickly set meeting agenda items along with focus ponts, description and agenda item lead'
        },
        {
          title: 'Agenda time planning',
          description: 'Various simple options quickly creating your agenda schedule. Keep your meetings on schedule with visible timers that adapt to the remaining meeting time'
        },
        {
          title: 'Minute manager',
          description: 'Easily take minutes as you go, with minutes linked agenda items. Quickly generate actions from minutes'
        },
        {
          title: 'Action manager',
          description: 'Generate actions at the click of a button. Assign action owners, stakeholders, due dates and dependencies.'
        },
        {
          title: 'Meeting file manager',
          description: 'Keep your meetings files organised. Go back to previous meetigs to find presentations and files'
        }
      ]
    }
  }
};
</script>

<style></style>
