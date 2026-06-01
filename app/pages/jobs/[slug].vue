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
  </div>
</template>

<script setup lang="ts">
  const { params } = useRoute()
  const { getItems } = useDirectusItems();

  import { MapPin, Clock3, CircleUserRound, Ticket, MoveRight, Map } from '@lucide/vue';

  interface Job {
    id: string;
    slug: string;
    title: string;
    gender: string;
    status: string;
    location: string;
    employment: string;
    experienceLevel: string;
    contractType: string;
  }

  const { data: job } = await useAsyncData(
    `job`+ params.slug,
    async () => {
      const items = await getItems<Job>({
        collection: 'jobs',
        params: {
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