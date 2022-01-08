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
            className="underline text-violet-500 hover:text-violet-400 decoration-violet-400 decoration-dotted decoration-2 underline-offset-2"
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
              className="text-xl font-semibold hover:underline text-slate-700 hover:text-violet-500 decoration-violet-400 decoration-dotted decoration-2 underline-offset-2"
            >
              GitHub
            </a>
            <p className="text-base text-slate-700">dillonchanis</p>
          </li>
          <li>
            <a
              href="https://twitter.com/dillonchanis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline text-slate-700 hover:text-violet-500 decoration-violet-400 decoration-dotted decoration-2 underline-offset-2"
            >
              Twitter
            </a>
            <p className="text-base text-slate-700">@dillonchanis</p>
          </li>
          <li>
            <a
              href="https://dribbble.com/dillonchanis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold hover:underline text-slate-700 hover:text-violet-500 decoration-violet-400 decoration-dotted decoration-2 underline-offset-2"
            >
              Dribbble
            </a>
            <p className="text-base text-slate-700">dillonchanis</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
