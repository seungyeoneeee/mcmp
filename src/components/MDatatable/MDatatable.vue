<script setup lang="ts">
import { PButton, PDynamicLayout } from '@cloudforet-test/mirinae';
import { createTestBasic, createTestAdvanced } from '@/api/modules/example';
import { ref } from 'vue';

const postBasicTestData = ref<string>('');

const postBasicTest = async () => {
  const { data } = await createTestBasic({ basicName: 'basic-test' });
  console.log(data);
  postBasicTestData.value = data.value.message;
};

const postAdvancedTest = async () => {
  // const {data} = await createTestAdvanced({})
};
</script>

<template>
  <div class="container">
    <h2>MDatatable</h2>
    <p-button @click="postBasicTest">Click to Post Data</p-button>
    <p v-if="postBasicTestData.length > 0">{{ postBasicTestData }}</p>

    <template>
      <p-dynamic-layout
        name="Base Information"
        type="query-search-table"
        :options="{
          fields: [
            { key: 'name', name: 'Key (text)', type: 'text' },
            { key: 'age', name: 'Age (text)', type: 'text', options: { postfix: ' age' } },
            { key: 'job', name: 'Job (badge)', type: 'badge' },
            {
              key: 'information.career.company',
              name: 'Career (more, array)',
              type: 'more',
              options: {
                sub_key: 'information.career',
                layout: {
                  name: 'Career Details',
                  type: 'popup',
                  options: { layout: { type: 'raw' } },
                },
              },
            },
          ],
          default_sort: { key: 'name', desc: false },
        }"
        :data="[
          {
            name: 'Anahi',
            age: 29,
            job: 'Chief Assurance Technician',
            information: {
              career: [
                { company: 'Hoeger, Davis and Nikolaus', from: '2015-02-09T22:41:35.919Z' },
                { company: 'Abbott - Weimann', from: '2083-06-09T19:33:07.562Z' },
                { company: 'O\'Connell and Sons', from: '2003-03-13T13:16:36.747Z' },
                { company: 'Jacobs, Kuvalis and Gerlach', from: '2019-07-10T01:57:45.002Z' },
                { company: 'Morar Inc', from: '2046-08-11T12:55:14.393Z' },
              ],
            },
          },
          {
            name: 'Kavon',
            age: 82,
            job: 'District Optimization Analyst',
            information: {
              career: [
                { company: 'Simonis - Schmidt', from: '1991-09-07T07:56:51.972Z' },
                { company: 'Mayert - McCullough', from: '2031-11-10T07:44:16.044Z' },
                { company: 'Jacobson Inc', from: '2015-11-28T04:09:32.806Z' },
                { company: 'Heidenreich - McCullough', from: '2073-10-07T04:17:57.316Z' },
                { company: 'Beier, Lueilwitz and Lowe', from: '2078-09-07T20:34:57.656Z' },
              ],
            },
          },
          {
            name: 'Green',
            age: 65,
            job: 'District Factors Assistant',
            information: {
              career: [
                { company: 'Howell - MacGyver', from: '2070-01-23T22:48:50.654Z' },
                { company: 'Heathcote LLC', from: '2040-02-27T23:50:27.486Z' },
                { company: 'Hermiston - Bernier', from: '2078-01-22T09:51:41.777Z' },
                { company: 'Turcotte, Renner and Deckow', from: '2019-11-28T13:54:30.225Z' },
                { company: 'Brekke, Ondricka and Pacocha', from: '2043-07-21T07:19:39.755Z' },
              ],
            },
          },
          {
            name: 'Brandt',
            age: 41,
            job: 'Dynamic Intranet Coordinator',
            information: {
              career: [
                { company: 'Cremin - Jacobson', from: '2044-01-31T08:48:10.511Z' },
                { company: 'Fay - Hilll', from: '2007-12-27T17:28:34.193Z' },
                { company: 'Jerde, Douglas and Nienow', from: '2018-09-08T05:03:25.694Z' },
                { company: 'Stark Inc', from: '2034-01-15T21:50:16.161Z' },
                { company: 'Franecki Inc', from: '2034-05-12T15:04:11.505Z' },
              ],
            },
          },
          {
            name: 'Alec',
            age: 72,
            job: 'Dynamic Intranet Developer',
            information: {
              career: [
                { company: 'Miller - Lubowitz', from: '1990-03-23T15:33:06.655Z' },
                { company: 'Boehm, Nicolas and Cassin', from: '2057-04-19T11:34:54.608Z' },
                { company: 'Kihn Group', from: '2021-07-08T09:13:46.720Z' },
                { company: 'Quigley - Veum', from: '2082-09-21T07:57:43.680Z' },
                { company: 'Buckridge - Mraz', from: '2091-02-26T15:47:01.301Z' },
              ],
            },
          },
        ]"
        :fetchOptions="{
          queryTags: [
            {
              key: { label: 'ID', name: 'id' },
              value: { label: 'Hello', name: 'hello' },
              operator: '',
            },
            { key: null, value: { label: 'No key', name: 'no key' }, operator: '' },
            {
              key: { label: 'DataTypes', name: 'data types' },
              value: {
                label: 'The same with QuerySearch data types.',
                name: 'datetime, integer, ...',
              },
              operator: '',
              invalid: true,
            },
            {
              key: { label: 'Operators', name: 'operators' },
              value: { label: 'The same with QuerySearch operators.', name: '=, !=, ...' },
              operator: '=',
            },
            {
              key: { label: 'Invalid Case', name: 'invalid case', dataType: 'datetime' },
              value: {
                label:
                  'If the value is not suitable format for data type, it displays tags like this.',
                name: 'invalid!',
              },
              operator: '',
              invalid: true,
              description: 'Invalid Case',
            },
            {
              key: { label: 'Clear all', name: 'clear all' },
              value: { label: 'If there is no tag, nothing will be displayed.', name: 'no tags' },
              operator: '',
            },
          ],
        }"
        :typeOptions="{
          loading: false,
          totalCount: 0,
          timezone: 'UTC',
          selectIndex: [],
          selectable: false,
          multiSelect: true,
          invalid: false,
          colCopy: false,
          excelVisible: false,
          settingsVisible: false,
          keyItemSets: [],
          valueHandlerMap: {},
        }"
      />
    </template>
  </div>
</template>

<style scoped lang="postcss">
.container {
  @apply bg-gray-100;
}
</style>
