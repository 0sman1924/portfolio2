import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold text-foreground mt-10 mb-4">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-3 pb-2 border-b border-border">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold text-foreground mt-4 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-foreground-secondary leading-relaxed mb-4">
              {children}
            </p>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 mb-4 text-foreground-secondary">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 mb-4 text-foreground-secondary">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-accent pl-4 my-4 text-foreground-secondary italic">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className={`${className ?? ""} text-sm`}>{children}</code>
              );
            }
            return (
              <code className="px-1.5 py-0.5 rounded bg-code-bg text-accent text-sm font-mono">
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-code-bg rounded-lg p-4 overflow-x-auto mb-4 text-sm">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="border-b-2 border-border">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="text-left py-2 px-3 font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="py-2 px-3 border-b border-border text-foreground-secondary">
              {children}
            </td>
          ),
          hr: () => <hr className="my-8 border-border" />,
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt ?? ""}
              className="rounded-lg my-4 max-w-full"
              loading="lazy"
            />
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
