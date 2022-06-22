import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "68wGqrWvUbUk9uG76N3xHk",  // ID of a project you are using
      token: "f5LJGlFy47WE9fHXThsihuERF2KkGkNXVcJ4CG3vDtnpaeVYwKYyH98IJf8LFQ6diXDrmmG5Xnym6M50Yw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})
