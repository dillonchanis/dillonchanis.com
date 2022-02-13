import { Title, Paragraph } from "../components/Typography";

export default function Contact() {
  return (
    <div>
      <header>
        <Title>Contact</Title>
      </header>

      <div className="mt-12">
        <Paragraph className="pb-6">
          If you want to get in touch with me just{" "}
          <a
            className="text-violet-500 underline decoration-violet-400 decoration-dotted decoration-2 underline-offset-2 hover:text-violet-400 dark:text-violet-300 dark:decoration-violet-300"
            href="mailto:dillonchanis92@gmail.com"
          >
            send me an email
          </a>
          . Otherwise you can catch me on various social media and apps:
        </Paragraph>

        <ul className="space-y-5">
          <li>
            <a
              href="https://github.com/dillonchanis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-slate-700 decoration-violet-400 decoration-dotted decoration-2 underline-offset-2 hover:text-violet-500 hover:underline dark:text-slate-300 hover:dark:text-violet-400"
            >
              GitHub
            </a>
            <p className="text-base text-slate-700 dark:text-slate-300">
              dillonchanis
            </p>
          </li>
          <li>
            <a
              href="https://twitter.com/dillonchanis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-slate-700 decoration-violet-400 decoration-dotted decoration-2 underline-offset-2 hover:text-violet-500 hover:underline dark:text-slate-300 hover:dark:text-violet-400"
            >
              Twitter
            </a>
            <p className="text-base text-slate-700 dark:text-slate-300">
              @dillonchanis
            </p>
          </li>
          <li>
            <a
              href="https://dribbble.com/dillonchanis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-slate-700 decoration-violet-400 decoration-dotted decoration-2 underline-offset-2 hover:text-violet-500 hover:underline dark:text-slate-300 hover:dark:text-violet-400"
            >
              Dribbble
            </a>
            <p className="text-base text-slate-700 dark:text-slate-300">
              dillonchanis
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
