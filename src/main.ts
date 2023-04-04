import './app.css'
import App from './App.svelte'
import ghpages from "gh-pages"

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'main',
        repo: 'https://github.com/username/yourproject.git', // Update to point to your repository  
        user: {
            name: 'PATH242', 
            email: 'mennashaheen2357@gmail.com'
        }
    },
    () => {
    const app = new App({
      target: document.getElementById('app'),
    })
  })

    export default app