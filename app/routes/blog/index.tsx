import { Title, Paragraph } from "~/components/Typography";

export default function Blog() {
  return (
    <div>
      <header>
        <Title>Writing &amp; Thoughts</Title>
      </header>

      <div className="mt-12">
        <Paragraph className="pb-6">
          I am in the process of setting up an actual blog. In the meantime,
          here are some old articles I wrote.
        </Paragraph>

        <ul className="space-y-5">
          <li>
            <a
              href="https://medium.com/@dillonchanis/handling-errors-in-vue-with-error-boundaries-91f6ead0093b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline text-slate-700 dark:text-slate-300 hover:text-violet-500 hover:dark:text-violet-400 decoration-violet-400 decoration-dotted decoration-2 underline-offset-2"
            >
              Handling Errors in Vue with Error Boundaries
            </a>
            <p className="text-base text-slate-700 dark:text-slate-300">
              Gracefully handle errors in your component tree with Error
              Boundaries.
            </p>
          </li>
          <li>
            <a
              href="https://medium.com/@dillonchanis/leveraging-render-props-in-vue-7eb9a19c262d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline text-slate-700 dark:text-slate-300 hover:text-violet-500 hover:dark:text-violet-400 decoration-violet-400 decoration-dotted decoration-2 underline-offset-2"
            >
              Leveraging Render Props in Vue
            </a>
            <p className="text-base text-slate-700 dark:text-slate-300">
              Learn to leverage the "render prop" pattern in Vue.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
