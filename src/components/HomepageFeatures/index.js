import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '查看伺服器完整介紹',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        瀏覽我們的伺服器介紹頁面，了解伺服器的完整設施和特色。
      </>
    ),
  },
  {
    title: '遊戲設定與教程',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        獲取模組安裝與使用教學，幫助您輕鬆上手並享受遊戲樂趣。
      </>
    ),
  },
  {
    title: '了解伺服器最新動態',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        隨時關注我們的Blog和公告，了解伺服器的最新動態和更新資訊，但實際上我們並不會更新:P 。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
