export default async ({ store }) => {
  await store.dispatch("getBlogContent");
  await store.dispatch("getAllPosts");
};
