const getAssetUrl = () => {
  const config = useRuntimeConfig()
  return config.public.directus.url + '/assets/'
}

export { getAssetUrl }