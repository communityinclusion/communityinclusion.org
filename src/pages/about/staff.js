import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const StaffPage = () => (
  <Layout>
  <section className="center mw8">
    <SEO title="staff" />
    <h1>Staff</h1>
    <ul class="list pl0 mt0 measure center">
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" alt="pic" />
      <div class="pl3 flex-auto">
        <span class="f6 db black-70">Mrmrs</span>
        <span class="f6 db black-70">Medium Hexagon, LLC</span>
      </div>
      <div>
        <a href="tel:" class="f6 link blue hover-dark-gray">+1 (999) 555-5555</a>
      </div>
  </li>
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-jxnblk.jpg" alt="pic" />
      <div class="pl3 flex-auto">
        <span class="f6 db black-70">Jxnblk</span>
        <span class="f6 db black-70">Large Circle, Inc</span>
      </div>
      <div>
        <a href="tel:" class="f6 link blue hover-dark-gray">+1 (999) 555-5555</a>
      </div>
  </li>
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-jasonli.jpg" alt="pic" />
      <div class="pl3 flex-auto">
        <span class="f6 db black-70">Jason Li</span>
        <span class="f6 db black-70">Little Blue Square, Inc</span>
      </div>
      <div>
        <a href="tel:" class="f6 link blue hover-dark-gray">+1 (999) 555-5555</a>
      </div>
  </li>
  <li
    class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img class="w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-yavor.jpg" alt="pic"  />
      <div class="pl3 flex-auto">
        <span class="f6 db black-70">Yavor</span>
        <span class="f6 db black-70">Large Circle, Inc</span>
      </div>
      <div>
        <a href="tel:" class="f6 link blue hover-dark-gray" alt="pic" >+1 (999) 555-5555</a>
      </div>
  </li>
</ul>
</section>
  </Layout>
)

export default StaffPage
