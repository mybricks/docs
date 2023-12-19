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
              <p className={css.name}>MyBricks-SPA</p>
              <label>可嵌入您系统的企业级低代码引擎</label>
              <p className={css.desc}>
                各类UI建模及仿真、渲染器、插件、通用组件库等
              </p>

              {/* <button
                className={css.quickStart}
                onClick={(e) => {
                  window.location.href =
                    "https://github.com/mybricks/designer-spa-demo";
                }}
              >
                快速开始
              </button> */}

              <Link className={css.quickStart} to="/docs/quick-start">
                快速开始
              </Link>

              <img src={"https://f2.beckwai.com/udata/pkg/eshop/fangzhou/temp/img_1.3f8aba3d5f11de6e.png"} />
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

          <section className={css.details}>
            <div className={css.title}>引擎特性</div>
            <div className={css.items}>
              <div className={css.item}>
                <h3>降本增效利器</h3>
                <p>
                  统计数据表明，使用MyBricks-SPA可以将效率提升8-10倍，成本降低为原来的1/4。仅需要基本的前端工程能力，即可完成各类复杂业务场景的开发。
                </p>
              </div>

              <div className={css.item}>
                <h3>轻松接入，开箱即用</h3>
                <p>
                  MyBricks-SPA封装集成了面向不同场景的应用模版、组件库、插件等，通过简单几行代码即可将其集成到自己的低代码搭建平台中
                </p>
              </div>

              <div className={css.item}>
                <h3>被集成、被定义，灵活扩展</h3>
                <p>
                  支持基于实际业务场景的各类扩展，包括连接器、权限、埋点、发布流程、自定义组件库开发等各项能力，一切为了企业的个性化与便利性
                </p>
              </div>

              <div className={css.item}>
                <h3>纯前端技术、跨平台应用嵌入</h3>
                <p>
                  MyBricks-SPA支持跨平台开发，使用其功能无需预装任何插件或第三方组件，支持以原生的方式嵌入各类应用，与各类后端技术框架相结合。
                </p>
              </div>

              <div className={css.item}>
                <h3>强大的图形化编程能力</h3>
                <p>
                  搭载了强大的MyBricks-Flow图形编排引擎，完全积木式的搭建体验，即时调试，真正意义的所见即所得
                </p>
              </div>

              <div className={css.item}>
                <h3>搭载通用组件库、自定义开发</h3>
                <p>
                  随引擎搭载了各类通用组件库，历时多年的打磨、久经场景淬炼。同时，通过使用MyBricks-DevTools，您可以轻松开发自己的组件库
                </p>
              </div>

              <div className={css.item}>
                <h3>MyBricks.ai</h3>
                <p>
                  随引擎搭载了基于chatGPT的Copilot，自然语言驱动。同时，该项能力会持续进化，未来将支持更多的AI能力，为您的开发提供更多的便利
                </p>
              </div>

              <div className={css.item}>
                <h3>专业团队的支持</h3>
                <p>
                  我们是专注低代码引擎及相关解决方案的团队，多年的打磨进化，我们的产品和服务已经被多家企业及组织所采用，相信专业的力量
                </p>
              </div>

              <div className={css.item}>
                <h3>开源与社区</h3>
                <p>
                  在MyBricks的Github社区，您可以免费获取各类组件库、编辑库、插件等源码资源，也可以在社区中与其他开发者交流
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className={css.groupQR}>
          <img src={"https://f2.beckwai.com/udata/pkg/eshop/fangzhou/temp/mybrickB-qrcode.b815281c00c5f36d.jpeg"} />
          关注 MyBricks 公众号
        </div>

        <div className={css.chat}>
          <img src={"https://f2.beckwai.com/udata/pkg/eshop/fangzhou/temp/wechat.b028d63eeb8cf009.png"} />
          合作咨询
        </div>
      </main>
    </Layout>
  );
}
