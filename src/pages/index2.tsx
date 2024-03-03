import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import css from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", css.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={css.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start"
          >
            快速开始
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <main>
        <div className={css.view}>
          <div className={css.slogan}>
            <section>
              <p className={css.name}>MyBricks</p>
              <label>可嵌入您系统的企业级低代码引擎</label>
              <p className={css.desc}>
                各类UI建模及仿真、渲染器、插件、通用组件库等
              </p>

              <Link className={css.quickStart} to="/docs/about/intro/">
                快速开始
              </Link>

              {/* <img src={"https://f2.beckwai.com/udata/pkg/eshop/fangzhou/temp/img_1.3f8aba3d5f11de6e.png"} /> */}
            </section>
          </div>

          <section className={css.scenes}>
            <div className={css.title}>应用场景</div>
            <div className={css.items}>
              <div className={css.item}>
                <h3>PC应用、门户网站</h3>
              </div>

              <div className={css.item}>
                <h3>H5</h3>
              </div>

              <div className={css.item}>
                <h3>小程序</h3>
              </div>

              <div className={css.item}>
                <h3>营销活动</h3>
              </div>

              <div className={css.item}>
                <h3>图片海报</h3>
              </div>

              <div className={css.item}>
                <h3>区块卡片</h3>
              </div>

              <div className={css.item}>
                <h3>云组件</h3>
              </div>

              <div className={css.item}>
                <h3>源码出码</h3>
              </div>
            </div>
          </section>

        </div>

      </main>
    </Layout>
  );
}
