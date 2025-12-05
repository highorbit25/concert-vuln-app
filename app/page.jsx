export default function HomePage() {
  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto", padding: "0 1rem", fontFamily: "system-ui, sans-serif" }}>
      <header>
        <h1>React Server Components RCE PoC – Vulnerable Stack</h1>
        <p>
          This Next.js application intentionally uses vulnerable React Server Components (RSC) and Next.js
          versions in order to test how well security scanners can detect the related remote code execution (RCE)
          vulnerabilities.
        </p>
      </header>

      <section style={{ marginTop: "2rem" }}>
        <h2>Affected Vulnerabilities</h2>
        <ul>
          <li>
            <strong>CVE-2025-55182</strong> – React Server Components “Flight” protocol unsafe deserialization
            in the <code>react-server-dom-*</code> packages.
          </li>
          <li>
            <strong>CVE-2025-66478</strong> – Next.js integration of the same underlying RSC flaw affecting
            App Router / server actions deployments.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Environment purpose</h2>
        <p>
          This container is designed <strong>only</strong> for:
        </p>
        <ul>
          <li>Testing SCA and container scanners against known-vulnerable React / Next.js RSC versions</li>
          <li>Reproducing detection rules and signatures in a controlled lab</li>
        </ul>
        <p style={{ marginTop: "0.75rem", color: "#b00020", fontWeight: "bold" }}>
          Do not expose this container to the public internet, do not use it with real user data, and do not
          deploy it in production.
        </p>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Key vulnerable components</h2>
        <ul>
          <li>
            React RSC packages:
            <ul>
              <li><code>react-server-dom-webpack</code> 19.0.0 / 19.1.0 / 19.1.1 / 19.2.0</li>
              <li><code>react-server-dom-parcel</code> 19.0.0 / 19.1.0 / 19.1.1 / 19.2.0</li>
              <li><code>react-server-dom-turbopack</code> 19.0.0 / 19.1.0 / 19.1.1 / 19.2.0</li>
            </ul>
          </li>
          <li>
            Next.js:
            <ul>
              <li>All stable 15.x</li>
              <li>All stable 16.x (prior to patched 16.0.7)</li>
              <li>Canary builds from 14.3.0-canary.77 and above</li>
            </ul>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>References</h2>
        <ul>
          <li>
            Snyk / DEV post:{" "}
            <a
              href="https://dev.to/snyk/security-advisory-critical-rce-vulnerabilities-in-react-server-components-nextjs-3lef"
              target="_blank"
              rel="noreferrer"
            >
              Security Advisory: Critical RCE Vulnerabilities in React Server Components &amp; Next.js
            </a>
          </li>
          <li>
            Snyk advisory – <code>react-server-dom-webpack</code>:{" "}
            <a
              href="https://security.snyk.io/vuln/SNYK-JS-REACTSERVERDOMWEBPACK-14173285"
              target="_blank"
              rel="noreferrer"
            >
              SNYK-JS-REACTSERVERDOMWEBPACK-14173285
            </a>
          </li>
          <li>
            Snyk advisory – <code>react-server-dom-turbopack</code>:{" "}
            <a
              href="https://security.snyk.io/vuln/SNYK-JS-REACTSERVERDOMTURBOPACK-14173287"
              target="_blank"
              rel="noreferrer"
            >
              SNYK-JS-REACTSERVERDOMTURBOPACK-14173287
            </a>
          </li>
          <li>
            Snyk advisory – <code>react-server-dom-parcel</code>:{" "}
            <a
              href="https://security.snyk.io/vuln/SNYK-JS-REACTSERVERDOMPARCEL-14173286"
              target="_blank"
              rel="noreferrer"
            >
              SNYK-JS-REACTSERVERDOMPARCEL-14173286
            </a>
          </li>
          <li>
            Snyk advisory – Next.js RSC integration:{" "}
            <a
              href="https://security.snyk.io/vuln/SNYK-JS-NEXT-14173355"
              target="_blank"
              rel="noreferrer"
            >
              SNYK-JS-NEXT-14173355
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
