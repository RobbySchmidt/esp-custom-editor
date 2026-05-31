<template>
  <div class="container-main grid md:grid-cols-2 xl:grid-cols-3 gap-4">
    <NuxtLink
      v-if="jobs"
      v-for="job in jobs"
      :key="job.id"
      :to="job.id"
      class="bg-primary py-6 px-8 rounded-md text-white hover:bg-secondary hover:text-primary duration-300 ease-in-out xl:cursor-pointer group">
      <h2
        v-if="job.title" 
        class="font-medium text-3xl">
        {{ job.title }}
      </h2>
      <span
        v-if="job.gender"
        class="font-medium text-3xl">
        {{ job.gender }}
      </span>

      <h3
        v-if="job.location" 
        class="font-medium mt-10">
        {{ job.location }}
      </h3>
      <span
        v-if="job.employment" 
        class="font-medium block mb-10">
        {{ job.employment }}
      </span>

      <span
        class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary duration-300 ease-in-out">
        <MoveRight class="w-4.5"/>
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  import { MoveRight } from '@lucide/vue'
  const props = defineProps<{
    collection: string
  }>()

  const { getItems } = useDirectusItems();

  interface Jobs {
    id: string;
    title: string;
    gender: string;
    status: string;
    location: string;
    employment: string;
  }
 
  const jobs = await getItems<Jobs>({
    collection: props.collection,
    params: {
      filter: {
        status: {
          _eq: 'published'
        }
      }
    }
  });
    
</script>

<style scoped>

</style>