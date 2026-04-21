import type { HandbookTopic } from "@/lib/types/handbook"

import { taxTopics } from "@/lib/content/taxes/topics"

export { taxTopics }

export function getTopic(slug: string) {
  return taxTopics.find((topic) => topic.slug === slug)
}

export function getRelatedTopics(slugs: string[] = []) {
  return slugs.map(getTopic).filter((topic): topic is HandbookTopic => Boolean(topic))
}
