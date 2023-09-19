import { serve } from "bun";

serve({
        async fetch(request) {
            return new Response("Hi!");
        }
    })

console.log("Server running on port 3000")
