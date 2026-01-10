import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import styles from "./styles/subscribe.scss"

function Subscribe({ displayClass }: QuartzComponentProps) {
  return (
    <div className={`subscribe-container ${displayClass ?? ""}`}>
      <h3>Subscribe to my Garden 🪴</h3>
      <p>Get new notes delivered to your inbox.</p>
      <form 
        action="https://api.follow.it/subscription-form/U0lKWko1djA0SWk1SE4xcVh4eFJSU05Za25QYVovV2YzVDEvQXhNZmgwR05xUDZ6WEpiNTVzMXNSZ1VmM3pJQTUzQ0lZaXh0TVpudjZTekhkSFVZZC9va21ZK0paUmRYbm1yaDZmMEZBVUp4Q2tQNUZtcHh1T2QwUmlKK21ZT3p8dGRUeklWQ3BjNzFURG84RVhCa09iKzhzR1hNRkt0TFhIcys3blIyMEo3WT0=/8" 
        method="post"
      >
        <input type="email" name="email" placeholder="email@example.com" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

Subscribe.css = styles
export default (() => Subscribe) satisfies QuartzComponentConstructor

