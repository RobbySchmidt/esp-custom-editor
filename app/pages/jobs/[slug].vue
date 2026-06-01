<template>
  <div class="py-f-12">
    <div class="container-main">
      <h1 
        class="font-medium text-primary text-f-6xl space-x-3">
        <span v-if="job?.title">
          {{ job?.title }}
        </span>
        <span v-if="job?.gender">
          {{ job?.gender }}
        </span>
      </h1>

      <div>
        <ul class="[&_li]:flex [&_li]:gap-2 [&_li]:items-center columns-2 md:columns-4 py-f-8 space-y-f-8 md:space-y-0">
          <li 
            v-if="job?.location">
            <MapPin />
            <span class="font-medium">
              {{ job?.location }}
            </span>
          </li>
          <li 
            v-if="job?.employment">
            <Clock3 />
            <span class="font-medium">
              {{ job?.employment }}
            </span>
          </li>
          <li 
            v-if="job?.experienceLevel">
            <CircleUserRound />
            <span class="font-medium">
              {{ job?.experienceLevel }}
            </span>
          </li>
          <li 
            v-if="job?.contractType">
            <Ticket />
            <span class="font-medium">
              {{ job?.contractType }}
            </span>
          </li>
        </ul>

        <div class="flex items-center gap-f-12">
          <Button class="group">
            <span>Jetzt bewerben</span>
            <MoveRight class="w-4.5 group-hover:translate-x-1 duration-300 ease-in-out"/>
          </Button>

          <span class="flex gap-2 items-center">
            <Map />
            <NuxtLink class="font-medium underline">
              Standort erkunden
            </NuxtLink>
          </span>
        </div>
      </div>
    </div>

    <div class="px-4 md:px-8 xl:px-4 py-f-24 grid lg:grid-cols-2 lg:place-items-center gap-f-12 lg:gap-0">
      <img 
        v-if="job?.image"
        :src="getAssetUrl() + job?.image?.filename_disk" 
        :alt="job?.location"
        class="block w-full">

        <div 
          v-if="job?.description"
          class="lg:px-f-24 [&_h2]:font-medium [&_h2]:text-f-3xl [&_h2]:mb-f-8"
          v-html="job?.description">
        </div>
    </div>

    <div class="bg-primary xl:rounded-md xl:max-w-[1500px] mx-auto">
      <div 
        class="container-main text-white [&_h3]:font-medium [&_h3]:text-f-3xl [&_h3]:mb-f-8 py-f-24"
        v-if="job?.responsibilities"
        v-html="job?.responsibilities">
      </div>
    </div>

    <div 
      class="container-main [&_h3]:font-medium [&_h3]:text-f-3xl [&_h3]:mb-f-8 pt-f-24 list-style"
      v-if="job?.requirements"
      v-html="job?.requirements">
    </div>

    <div 
      class="container-main [&_h3]:font-medium [&_h3]:text-f-3xl [&_h3]:mb-f-8 py-f-24 list-style"
      v-if="job?.benefits"
      v-html="job?.benefits">
    </div>
    <div class="container-main">
      <Button class="group">
        <span>Jetzt bewerben</span>
        <MoveRight class="w-4.5 group-hover:translate-x-1 duration-300 ease-in-out"/>
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { params } = useRoute()
  const { getItems } = useDirectusItems();

  import { MapPin, Clock3, CircleUserRound, Ticket, MoveRight, Map } from '@lucide/vue';
  import type { DirectusImage } from '~/types/directus';

  interface Job {
    id: string;
    slug: string;
    title: string;
    description: string;
    responsibilities: string;
    requirements: string;
    benefits: string;
    gender: string;
    status: string;
    location: string;
    employment: string;
    experienceLevel: string;
    contractType: string;
    image: DirectusImage | null;
  }

  const { data: job } = await useAsyncData(
    `job`+ params.slug,
    async () => {
      const items = await getItems<Job>({
        collection: 'jobs',
        params: {
          fields: ['*', 'image.*'],
          filter: {
            status: {
              _eq: 'published'
            },
            slug: {
              _eq: params.slug
            }
          }
        }
      });
      return items?.[0] ?? null;
    }
  );

  console.log(job.value)
</script>

<style scoped>

</style>