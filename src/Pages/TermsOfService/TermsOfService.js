import React, { useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import { PrivacyAndTermsStyling } from '../../CSS/Pages/PrivacyAndTermsStyling'

function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service | EastVPN'
  }, [])

  const classes = PrivacyAndTermsStyling()
  return (
    <div className={classes.AppPrivacyPolicyBackground}>
      <div className={classes.background} />

      <Container maxWidth='xl'>
        <div className={classes.MainContentPrivacyDiv}>
          <p className={classes.Terms__Title}>Terms of Service</p>
          <p className={classes.Terms__sub_Title}>Last modified: November 8, 2021</p>
        </div>
        <Grid container spacing={7}>
          <Grid item xs={12} md={4}>
            <div className={classes.tableOfContentsHeader}>
              <h3>Table of Contents</h3>
            </div>
            <div className={classes.tableOfContents}>
              <ol>
                <li>
                  <a href='#list-item-1' className={classes.link__item}>
                    Acceptance
                  </a>
                </li>

                <li>
                  <a href='#list-item-2' className={classes.link__item}>
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href='#list-item-3' className={classes.link__item}>
                    Payments & Subscriptions
                  </a>
                </li>

                <li>
                  <a href='#list-item-4' className={classes.link__item}>
                    Refund Policy
                  </a>
                </li>

                <li>
                  <a href='#list-item-5' className={classes.link__item}>
                    Acceptable Use Policy
                  </a>
                </li>

                <li>
                  <a href='#list-item-6' className={classes.link__item}>
                    Intellectual Property and License
                  </a>
                </li>

                <li>
                  <a href='#list-item-7' className={classes.link__item}>
                    Content Language and Translation
                  </a>
                </li>

                <li>
                  <a href='#list-item-8' className={classes.link__item}>
                    Third-Party Websites, Advertisements, and Partner Services
                  </a>
                </li>

                <li>
                  <a href='#list-item-9' className={classes.link__item}>
                    Disclaimer of warranties
                  </a>
                </li>

                <li>
                  <a href='#list-item-10' className={classes.link__item}>
                    Limitations of Liability
                  </a>
                </li>
                <li>
                  <a href='#list-item-11' className={classes.link__item}>
                    Indemnification
                  </a>
                </li>
                <li>
                  <a href='#list-item-12' className={classes.link__item}>
                    Electronic communications
                  </a>
                </li>
                <li>
                  <a href='#list-item-13' className={classes.link__item}>
                    Assignment
                  </a>
                </li>
                <li>
                  <a href='#list-item-14' className={classes.link__item}>
                    Revisions
                  </a>
                </li>
              </ol>
            </div>
          </Grid>
          <Grid className={classes.rightContentDiv} item xs={12} md={8}>
            <div>
              <h2>EastVPN Terms of Service</h2>
              <p>
                This document<b> (“Terms”)</b> explains the terms and conditions of use of the VPN services
                <b>&nbsp;(“Services”)</b>
                &nbsp; provided by <b>EastVPN</b>. These Terms govern the use of and access to our Services, which includes the
                EastVPN website, apps, and any software provided by EastVPN. <br />
                <br />
                Please read these terms of service carefully. among other things, they provide key information on your legal
                rights and obligations, future changes to the terms, automatic renewals, and limitations of liability
                <br />
                <br />
                By agreeing to these Terms, you are also agreeing to the&nbsp;
                <a href='/privacy-policy' className={classes.link__styling}>
                  Privacy Policy&nbsp;
                </a>
                <b>(“Privacy Policy”)</b>.
              </p>
            </div>

            <div>
              <h2 id='list-item-2'>Acceptance</h2>
              <p>
                By accessing the Content or Services, you are agreeing on behalf of yourself or those you represent <b>(“you”)</b>
                &nbsp; to comply with and be legally bound by these Terms in their entirety. These Terms constitute a legally
                binding agreement <b>(the “Agreement”)</b> between you and EastVPN. If you do not agree with any part of the
                Terms, you may stop using our Services.
                <br />
                <br />
                By creating an account for using our Services, you represent that you are at least eighteen (18) years of age or
                that you are a valid legal entity, and that the registration information you have provided is accurate and
                complete.
              </p>
            </div>

            <div>
              <h2 id='list-item-3'>Privacy Policy</h2>
              <p>
                EastVPN is committed to your privacy and does not collect or log browsing history, ingoing or outgoing traffic,
                data content, or DNS queries from users connected to our VPN. During user signup, we collect some sensitive
                information, such as your name, email address, and payment information. We only collect minimal information that
                is necessary to operate our Services.
                <br />
                <br /> For the sake of clarity and transparency, we have placed all information related to data collection in a
                separate document known as the Privacy Policy, which is available on our website. Please review our&nbsp;
                <a href='/privacy-policy' className={classes.link__styling}>
                  Privacy Policy&nbsp;
                </a>
                in its entirety to get a clear understanding of how we handle your sensitive data
              </p>
            </div>

            <div>
              <h2 id='list-item-4'>Payments & Subscriptions</h2>
              <p>
                Our paid Services are subscribed on a subscription period basis. Subscription purchases are handled via multiple
                third-party payment companies. You choose the subscription period and the payment method yourself when you sign up
                for the paid services. Once you purchase the subscription, you can use the premium services. At the end of the
                subscription expiry, your subscription will automatically be renewed and your chosen payment method will be
                charged unless you decide to cancel your subscription before its expiry. EastVPN reserves the right to amend
                subscription fees or institute new fees at any time upon reasonable advance notice posted on the website or email.
                Any changes to the fees will not affect the subscriber's current subscription period and will become effective
                upon subscription renewal. If you update payment details in your account, the updated information will be
                considered for any future payments. If you cancel the subscription before its expiry, your subscription will not
                be renewed and will be expired at the end of the subscription period. It will also be expired in case if the
                system failed to perform a successful transaction using your payment method at the end of the subscription. When a
                subscription is expired, your payment information is deleted from our system. You have to provide new payment
                details if you want to re-subscribe after expiry. <br />
                <br />
                Each paid subscription grants you one (1) license to use on six (6) different devices at any given time. If you
                want to use the services on more than six devices at a time, then you have to purchase another subscription plan
                using the new account.
              </p>
            </div>

            <div>
              <h2 id='list-item-5'>Refund Policy</h2>
              <p>
                EastVPN does not grant refunds for subscription payments. The reason for not offering any money-back guarantee is
                that we may offer a trial on the first subscription. We do not charge any payment if we offer a trial. The trial
                period may vary from 1-7 days. Once the trial ends, we charge a payment fee according to the subscribed plan. So
                we expect the user must rely on the trial period to properly evaluate our service.
              </p>
            </div>

            <div>
              <h2 id='list-item-6'>Acceptable Use Policy</h2>
              <p>
                EastVPN Services may be accessed from all around the world, so it is your responsibility to assess whether using
                the site, apps, software, or services is in compliance with local laws and regulations. If you use our services,
                you should comply with these Terms and applicable laws, regulations, and policies.
                <br />
                <br />
                You understand that it is your responsibility to keep your EastVPN account information confidential. You are
                responsible for all activity under your account. If you ever discover or suspect that someone has accessed your
                account without your authorization, you are advised to inform us immediately so that we may revoke your account
                credentials and issue new ones.
                <br />
                <br />
                EastVPN aims to provide the best service possible to all of our Subscribers. In that sense, we require that you do
                not misuse our Services. A misuse refers to any use, access, or interference with Services contrary to the Terms
                or applicable laws and regulations.
                <br />
                <br />
                In order to protect the Services from being misused or used to harm someone, EastVPN reserves the right to take
                appropriate measures when our Services are being used contrary to these Terms and applicable laws. You agree that
                EastVPN may terminate or disable your account, without providing a refund for Services already paid, if you misuse
                the Service.
                <br />
                <br />
                By using our Services, you agree not to:
                <br />
                <br />
              </p>
              <ul>
                <li>
                  Use our Services to send, post, or transmit any content which is illegal, hateful, threatening, insulting, or
                  defamatory; infringes on intellectual property rights; invades privacy; or incites violence as per the local,
                  state, national, or international law or regulation.
                </li>
                <li>
                  Use our Services to send or transmit unsolicited or unauthorized advertising/ marketing/promotional content
                  (i.e., “spam”).
                </li>
                <li>
                  Use our Services for the purpose of sending unsolicited emails in bulk quantities for advertising/marketing
                  purposes.
                </li>
                <li>Use our Services to serve pop-ups ads.</li>
                <li>
                  Use our Services to upload, download, post, reproduce or distribute any content protected by copyright or any
                  other proprietary right without getting permission from the owner of the proprietary content
                </li>
                <li>
                  Use our Services to upload, download, post, reproduce or distribute any content that includes sexual or explicit
                  depictions of minors.
                </li>
                <li>
                  Use our Services to access, probe, or connect to computing devices without proper authorization (i.e., any form
                  of “hacking”).
                </li>
                <li>Use our Services to spam, phish, harm, pretext, spider, crawl, or scrape.</li>
                <li>
                  Use the Services for unlawful purposes.Use our Services to collect or track the personal information of other
                  EastVPN users
                </li>
                <li>Use our Services to collect or track the personal information of other EastVPN users</li>
                <li>Attempt to intrude in, hack or illegally exploit servers operated by EastVPN</li>
                <li>
                  Attempt to compile, utilize, or distribute a list of IP addresses operated by EastVPN in conjunction with the
                  Service.
                </li>
                <li>Attempt to modify, distribute, reverse engineer our software and services</li>
                <li>Attempt to disrupt the services offered by EastVPN</li>
              </ul>
            </div>

            <div>
              <h2 id='list-item-7'>Intellectual Property and License</h2>
              <p>
                Subject to your compliance with these Terms, EastVPN grants to you a nonexclusive and limited license to download
                and use the Software and Services.
                <br />
                <br />
                This is an Agreement for access to and use of the Services. The Services are protected by intellectual property
                laws. The Services belong to us and is the property of us or our licensor/s (if any). We retain all ownership
                rights of the Services. Modifying, distributing to unauthorized parties, reverse engineering or using the Services
                in any way not authorized by EastVPN is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 id='list-item-8'>Content Language and Translation</h2>
              <p>
                All of our content was originally written in English. Any translation of our content is supported by third-party
                services. We cannot guarantee the accuracy of translated content. In the event of any discrepancy between the
                translated content and the English content, the English content shall prevail.
              </p>
            </div>

            <div>
              <h2 id='list-item-9'>Third-Party Websites, Advertisements, and Partner Services</h2>
              <p>
                EastVPN may provide you with content belonging to third parties or links leading to third-party websites. EastVPN
                is not responsible for the availability of the content provided by third parties as they are not under the
                administration of EastVPN, and they may have different terms of use and policies. Your access through our Services
                to any website, service, or content provided by third parties does not indicate any relationship between EastVPN
                and such third parties.
                <br />
                <br />
                EastVPN may, from time to time, run advertisements and promotions from partner services on our Services. Your
                interaction with any partner services is governed by their own applicable terms. EastVPN will never disclose your
                personal information with any provider of Partner Services. Your interactions with them are solely between you and
                such partner service. We are not responsible or liable for any loss or damage of any sort incurred as the result
                of your dealings with them or as the result of the presence of third-party advertisers on our Services.
              </p>
            </div>

            <div>
              <h2 id='list-item-10'>Disclaimer of warranties</h2>
              <p>
                We try our best to prevent disruptions in our Services and to improve the quality and integrity of our Services.
                But no software is free from defects, errors, and bugs. There is always room for improvement. We do not warrant,
                either explicitly or implicitly, that our Services are free from defects, errors, and bugs such as downtime,
                interruptions, loss of data, service delay, out-of-date information, etc. We do not make any warranty that the
                Services will meet your requirements. You acknowledge that you access the Website and Services at your own risk
                and discretion
                <br />
                <br />
                VPN service coverage, server locations, speeds, and quality may vary. EastVPN will try its best possible efforts
                to make the Services available at all times. However, the Service may be subject to unavailability for a variety
                of factors beyond our control, including but not limited to emergencies; third-party-service failures; or
                transmission, equipment, or network problems or limitations, interruptions, or signal strength; and may be
                refused, limited, or curtailed. We cannot predict or control when such downtime may occur and cannot control the
                duration of such downtime. We are not responsible for data, messages, or pages lost, not delivered, delayed, or
                misdirected because of interruptions or performance issues with the Service, communications services, or networks.
                We may impose usage or Service limits, suspend Service, terminate VPN accounts, or block certain kinds of usage at
                our sole discretion to protect Subscribers or the Service.
                <br />
                <br />
                EastVPN reserves the right to investigate matters we consider to be violations of these Terms. We may, but are not
                obligated to, in our sole discretion and without notice, remove, block, filter, or restrict by any means any
                materials or information that we consider to be actual or potential violations of the restrictions set forth in
                these Terms, and any other activities that may subject EastVPN or our user to liability. EastVPN disclaims any and
                all liability for any failure on our part to prevent such materials or information from being transmitted over the
                Service and/or into your computing device.
              </p>
            </div>

            <div>
              <h2 id='list-item-11'>Limitations of Liability</h2>
              <p>
                EastVPN shall not be liable and shall not have the responsibility of any kind to any Subscriber or other
                individual for any loss or damage that you incur in the event of:
              </p>
              <ul>
                <li>any failure or interruption of the Site or Service</li>
                <li>your interactions on the Site or Service</li>
                <li>your failure to comply with this Agreement</li>
                <li>
                  any act or omission of any third party involved in making the website or Service or the data contained therein
                  available to you
                </li>
                <li>
                  unauthorized access to or alteration of your transmissions or data, whether or not the circumstances giving rise
                  to such cause may have been within the control of EastVPN or of any vendor providing software, services, or
                  support for the Site or Service.
                </li>
              </ul>
              <p>
                There are inherent risks in relying upon, using, transmitting, or retrieving any data and/or content on the
                Internet, and we urge you to make sure you understand these risks before using the Services. EastVPN is not
                responsible for any direct, indirect, incidental, special, consequential, or other damages (including but not
                limited to loss of data, loss of profits, business interruptions).
              </p>
            </div>

            <div>
              <h2 id='list-item-12'>Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless EastVPN, its officers, directors, employees, members, partners,
                agents, and suppliers, and their respective affiliates, officers, directors, employees, members, shareholders,
                partners, and agents, from any and all claims and expenses (including, without limitation, reasonable attorney's
                fees, expert witness fees) arising out of or in any way related to your breach of these Terms, your use of the
                Services, or any of your other acts or omissions.
              </p>
            </div>

            <div>
              <h2 id='list-item-13'>Electronic communications</h2>
              <p>
                You agree to receive communications from us electronically, e.g., by email, app messages, etc., and consent that
                such notifications satisfy any legal requirement for communication in writing. You agree that we may communicate
                to you for the purpose of advising you of changes or additions to the Services, about any of our products or
                services, or for such other purposes that are reasonable or required by applicable law.
                <br />
                <br />
                When communicating with our customer support representatives, you agree to be respectful and gentle. If we feel
                that your behavior towards any of our customer support representatives or other employees is at any time
                threatening or offensive, we reserve the right to immediately terminate your account.
              </p>
            </div>

            <div>
              <h2 id='list-item-14'>Assignment</h2>
              <p>
                In the event that EastVPN is acquired by, or merged with, a third-party entity, EastVPN may, without your prior
                written consent, assign this agreement and its rights and obligations hereunder to a new corporate entity, who
                shall be bound by these same rights and obligations. Any assignment not in accordance with this Agreement shall be
                void.
              </p>
            </div>

            <div>
              <h2 id='list-item-14'>Revisions</h2>
              <p>
                EastVPN may update/revise the Terms from time to time without notice. If you continue to use EastVPN's Services
                (content, website, apps, or software) after these changes take effect, then you agree to the revised Terms. You
                understand and agree that it is your obligation to review these Terms from time to time in order to stay informed
                on current rules and obligations. EastVPN will make every effort to inform its users about the change in these
                Terms, whenever they happen, by email or by posting a notice in the user's area to review. However, the company
                cannot be held liable for it. Using the Services after changes become effective means that you agree to the new
                Terms.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default TermsOfService
