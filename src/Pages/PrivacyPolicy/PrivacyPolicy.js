import React, { useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import { PrivacyAndTermsStyling } from '../../CSS/Pages/PrivacyAndTermsStyling'

function PrivacyPolicy() {
  const classes = PrivacyAndTermsStyling()

  useEffect(() => {
    document.title = 'Privacy Policy | EastVPN'
  }, [])

  return (
    <div className={classes.AppPrivacyPolicyBackground}>
      <div className={classes.background} />
      <Container maxWidth='xl'>
        <div className={classes.MainContentPrivacyDiv}>
          <p className={classes.Terms__Title}>Privacy Policy</p>
          <p className={classes.Terms__sub_Title}>Last modified: November 17, 2021</p>
        </div>
        <Grid container spacing={7}>
          <Grid item xs={12} md={4}>
            <div className={classes.tableOfContentsHeader}>
              <h3>Table of Contents</h3>
            </div>
            <div className={classes.tableOfContents}>
              <ol>
                <li className={classes.list__item}>
                  <a href='#list-item-1' className={classes.link__item}>
                    General Information
                  </a>
                </li>

                <li>
                  <a href='#list-item-2' className={classes.link__item}>
                    Personal Information
                  </a>
                </li>

                <li>
                  <a href='#list-item-3' className={classes.link__item}>
                    VPN Connection Summary Statistics
                  </a>
                </li>

                <li>
                  <a href='#list-item-4' className={classes.link__item}>
                    Anonymous App Diagnostics
                  </a>
                </li>

                <li>
                  <a href='#list-item-5' className={classes.link__item}>
                    Applicable Laws
                  </a>
                </li>

                <li>
                  <a href='#list-item-6' className={classes.link__item}>
                    Storing of Information Related to Email, Live Chat, and Support Tickets
                  </a>
                </li>

                <li>
                  <a href='#list-item-7' className={classes.link__item}>
                    Cookie Policy
                  </a>
                </li>

                <li>
                  <a href='#list-item-8' className={classes.link__item}>
                    Data Retention Policy & Data Protection Rights
                  </a>
                </li>

                <li>
                  <a href='#list-item-9' className={classes.link__item}>
                    Consent and Age Restrictions
                  </a>
                </li>

                <li>
                  <a href='#list-item-10' className={classes.link__item}>
                    Changes to the Privacy Policy
                  </a>
                </li>

                <li>
                  <a href='#list-item-11' className={classes.link__item}>
                    How to Contact EastVPN
                  </a>
                </li>
              </ol>
            </div>
          </Grid>
          <Grid className={classes.rightContentDiv} item xs={12} md={8}>
            <div>
              <h2>EastVPN Privacy Policy</h2>
              <p>
                This document <b>(“Privacy Policy”)</b> explains what information we collect, what we don't collect, and how we
                collect, use, and store information. We do not collect logs of your activity including browsing history, incoming
                and outgoing traffic, the data you access, or DNS queries. We also never store sensitive connection logs
                permanently, meaning no logs of your IP address, assigned VPN IP address, connection timestamp, or session
                duration. We assert that we only collect minimal data, the sole purpose of which is to operate our VPN and keep it
                running smoothly. We designed our system to not keep any sensitive/personally identifiable information. This
                ensures that we have no data to share even when required by the law
              </p>
            </div>

            <div>
              <h2 id='list-item-2'>General Information</h2>
              <p>EastVPN collects three types of information</p>
              <ol>
                <li>Personal Information</li>

                <p>
                  This is the information we collect for managing EastVPN user subscriptions. This includes name, email address,
                  and payment information which is collected when a user subscribes to our premium plans
                </p>

                <li>VPN Connection Summary Statistics</li>

                <p>
                  EastVPN collects minimal information about the usage temporarily in order to operate the system and to maintain
                  outstanding customer support and quality of service. The section below specifies what data we collect. These
                  statistics never include anything related to the user activity or tracking
                </p>

                <li>Anonymous App Diagnostics</li>

                <p>
                  EastVPN collects app diagnostic data, which includes crash reports, usability diagnostics, and VPN connection
                  diagnostics. These statistics are anonymized and cannot be tied back to individual EastVPN users. This helps us
                  to identify the bugs and the issues faced by users to maintain the quality of service
                </p>
              </ol>
            </div>

            <div>
              <h2 id='list-item-3'>Personal Information</h2>
              <p>
                EastVPN collects personal information when you sign up and purchase the subscription either through a website or
                mobile. We collect names, email addresses, and payment details in order to create an account. The payment
                information depends on the payment method and payment processors (i.e. Stripe, Ayden) used by us. In the case of
                credit/debit card payment, this information includes cardholder name, card number, card expiry date, and CVC.
                EastVPN offers various subscription plans having specific time periods. Once you purchase the subscription, you
                can use the premium services. At the end of the subscription period, your subscription will automatically be
                renewed and your chosen payment method will be charged unless you decide to cancel your subscription before its
                expiry. If you cancel the subscription before its expiry, your subscription will not be renewed and will be
                expired at the end of the subscription period. It will also be expired in case if the system failed to perform a
                successful transaction using your payment method at the end of the subscription period. When a subscription is
                expired, your payment information is deleted from our system. You have to provide new payment details if you want
                to re-subscribe after expiry.
              </p>
              <p>EastVPN uses your email address for the following reasons:</p>

              <ul>
                <li>To send emails related to the account (signup, logins)</li>

                <li>To send emails related to payment transactions</li>

                <li>To provide links for resetting passwords</li>

                <li>To send you updates and announcements</li>

                <li>
                  To send marketing campaigns, offers, and surveys, etc. You can opt-out if you do not want to receive marketing
                  emails
                </li>
              </ul>
            </div>

            <div>
              <h2>Anonymous App Diagnostics</h2>
              <p>
                EastVPN collects anonymized app diagnostic data, which includes crash reports, application monitoring, usability
                diagnostics, and VPN connection diagnostics. We use this data to identify problems and areas for improvement in
                our apps, servers, and other services. The information we receive is fully anonymized and cannot be tied back to
                individual EastVPN users.
              </p>

              <p>We collect the following anonymized information:</p>
              <ul>
                <li>Diagnostic information about if and how a VPN connection attempt failed.</li>

                <li>
                  App monitoring, diagnostics, and error tracing. These are handled in an anonymized form by these third parties
                  depending upon the platform user is using
                  <br /> <br />
                  <ul>
                    <li>
                      Android: Firebase Crashlytics, owned by Google (See&nbsp;
                      <a
                        href='https://firebase.google.com/support/privacy/'
                        target='_blank'
                        rel='noreferrer'
                        className={classes.link__styling}
                      >
                        Privacy Policy
                      </a>
                      )
                    </li>
                    <li>
                      iOS: Firebase Crashlytics, owned by Google (See&nbsp;
                      <a
                        href='https://firebase.google.com/support/privacy/'
                        target='_blank'
                        rel='noreferrer'
                        className={classes.link__styling}
                      >
                        Privacy Policy
                      </a>
                      ) and Apple (See&nbsp;
                      <a
                        href='https://www.apple.com/legal/privacy/en-ww/'
                        target='_blank'
                        rel='noreferrer'
                        className={classes.link__styling}
                      >
                        Privacy Policy
                      </a>
                      )
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 id='list-item-4'>VPN Connection Summary Statistics</h2>
              <p>EastVPN never collects the browsing history, incoming and outgoing traffic, DNS Queries. Therefore:</p>
              <ul>
                <li>We do not know which user ever accessed a particular website or service</li>
                <li>We do not know the data or content a user accessed during the VPN connection</li>
              </ul>

              <p>
                But EastVPN collects some stats for just the current session (i.e. when a user is connected to VPN). As soon as
                the user is disconnected, the session is terminated and logs are wiped out. These stats are below
              </p>

              <ul>
                <li>User IP Address</li>
                <li>User Country</li>
                <li>User ISP</li>
              </ul>

              <p>
                These stats are required to track the number of concurrent VPN connections for each user and to properly
                investigate and fix user connection issues and service disruption in various regions. When a user disconnects the
                VPN. these logs are automatically removed. We do not share these temporary logs with anyone and ultimately these
                logs are wiped out from the system when the session ends
                <br />
                <br />
                We have designed our systems to categorically eliminate the storage of any sensitive data wherever it exists. We
                are committed to our user's privacy by not possessing any data related to online activities.
              </p>
            </div>

            <div>
              <h2 id='list-item-6'>Applicable Laws</h2>
              <p>
                EastVPN core mission is to keep your information hidden and secure. We are not obliged to store user data. And
                even if we receive a legal order, we have no worthwhile data to share with any law enforcement agency from any
                particular country in the world. This ensures the privacy of our users.
              </p>
            </div>

            <div>
              <h2>Storing of Information Related to Email, Live Chat, and Support Tickets</h2>
              <p>
                EastVPN keeps records of queries, complaints, or compliments you submit to us through our Website or Services,
                along with our response. Depending on how you contact EastVPN, we may collect your email address and any
                additional information you provide to us. Having full correspondence records enables our staff to provide the best
                possible customer support experience. We might use different third-party platforms for support correspondence:
                Zendesk for emails and support tickets etc. When you contact us using these platforms, they will store your
                correspondence records including your email address, as well as user and device attributes that help with
                troubleshooting. These platforms utilize modern security practices and the best encryption.
              </p>
            </div>

            <div>
              <h2 id='list-item-7'>Security Measures to Protect Your Information</h2>
              <p>
                EastVPN stores the passwords, public keys, and private keys and any sensitive data securely using strong
                cryptographic algorithms where necessary.
                <br /> <br />
                Pertinent security measures are taken in place for the protection of this information against unauthorized access,
                unauthorized alteration, destruction, or disclosure of data. Access to user information is restricted to staff who
                require such access to perform their respective duties. Access Control Procedures are properly managed and
                monitored. The staff who require specialized access are bound by confidentiality obligations. They may be
                subjected to disciplinary action, which includes termination and criminal prosecution, upon failing to meet these
                obligations.
                <br /> <br />
                Servers are housed in data centers with strong security practices. None of these data centers require us to
                collect or store any traffic data or personal information related to your use of VPN Services. If any data center
                were to ask us to log such data, we would immediately cease operations with said data center and find alternative
                options. Even if any of our servers are seized or attacked to break its encryption, there is no information that
                would tie up an individual user to a particular behavior, service, or website
                <br /> <br />
                While we affirm that we have put every possible effort to make this system robust and secure. it is important to
                understand that no data security measures in the world can be declared 100% foolproof.
              </p>
            </div>

            <div>
              <h2 id='list-item-8'>Cookie Policy</h2>
              <p>
                EastVPN utilizes various types of cookies - small text files - to store information related to your visit on our
                website, to give you the best experience, and to deliver advertising messages and offers that are relevant to you.
                The cookies we use may vary over time as we continuously update and improve our site.
              </p>

              <p style={{ fontWeight: '600' }}> EastVPN Cookies</p>
              <p>
                The cookies set by EastVPN enable us to set your language preference, attribute visitors to a marketing channel,
                and, once you log in, securely show you information that is specific to your account. The cookies contain a user
                identifier, but no directly personally-identifying information such as your name or email address, and do not
                track any activity outside of EastVPN's domains.
              </p>

              <p style={{ fontWeight: '600' }}> Third-party cookies</p>
              <p>
                EastVPN uses third-party services such as Google Analytics and Adwords. Cookies from such services are used to
                collect data for statistical reports. For example, we may generate reports regarding the number of time users
                spend on the website and the number of users who visit a particular page.
                <br /> <br />
                EastVPN uses Google AdWords marketing to show advertisements on third- party websites (including Google) to users
                who have visited our Site. Any data collected will be used in accordance with our Privacy Policy and Google's
                privacy policy.
              </p>

              <p style={{ fontWeight: '600' }}> Disabling cookies</p>

              <p>
                You are free to change your cookie preferences at any time. You can do this in your browser's settings. Depending
                on which browser and device you use, you may be able to control which cookies you allow, which cookies you want to
                block in the future, and delete cookies. For more information about these settings, please refer to the “help”
                section of your browser. Note that EastVPN's site may not work as intended if you choose to disable cookies.
              </p>
            </div>

            <div>
              <h2 id='list-item-9'>Data Retention Policy & Data Protection Rights</h2>
              <p>
                EastVPN is committed to user privacy globally, and our existing practices reflect that through a minimal
                collection of data and ensuring users have control over their personal information. Your personal data is mainly
                processed for the purpose of providing you with the best services.
                <br /> <br />
                The European Union's General Data Protection Regulation (“GDPR”) requires that we provide notice in a specific way
                to our European users (EU) about their privacy rights. In line with the GDPR, we collect and process the data
                outlined in this Privacy Policy under legal bases:
              </p>
              <ul>
                <li>to properly administer business communication with users</li>
                <li>to operate our services and ensure their secure, reliable, and robust performance</li>

                <li>to receive knowledge of how our website and applications are being used.</li>
              </ul>
              <p>
                EastVPN may process your personal data for marketing purposes. when we obtain your consent for such processing
                (the legal basis for processing, in this case, is your consent) or when applicable law permits us to contact you
                without separate consent (under the legal basis of a legitimate interest)
                <br /> <br />
                Users based in European Economic Area (EEA) receives additional data protection rights:
              </p>
              <ul>
                <li>
                  You can always access, correct, and update the information you provided to us, within your user's profile.
                </li>

                <li>
                  You have the right to opt-out of marketing communications we send you at any time by clicking on the
                  “unsubscribe” or “opt-out” link in the marketing emails we send to you.
                </li>

                <li>
                  You can request us to erase your personal data. if you decide to leave our services completely. You can do so at
                  any time by sending an email at&nbsp;
                  <a href='mailto:support@EastVPNpro.com' className={classes.link__styling}>
                    support@EastVPNpro.com
                  </a>
                  . If you request the deletion of your profile, it may take up to 7 days to complete
                </li>
              </ul>
            </div>

            <div>
              <h2 id='list-item-10'>Consent and Age Restrictions</h2>
              <p>
                By using our website, apps, or services, you agree to have your information handled as described in the Privacy
                Policy and&nbsp;
                <a href='/terms-of-service' className={classes.link__styling}>
                  Terms of Service&nbsp;
                </a>
                <br /> <br />
                The Services provided by EastVPN are intended for adults aged 18 and above. If you believe your child has provided
                information to us, please contact us immediately.
              </p>
            </div>

            <div>
              <h2>Changes to the Privacy Policy</h2>
              <p>
                EastVPN may change and amend its Privacy Policy at times. EastVPN holds the sole right to change and modify its
                Privacy Policy whenever it is felt necessary to do so. Whenever a revision is made, the modified revision date
                will be displayed at the top of this page. We encourage you to frequently check this page for any changes to stay
                informed. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and
                be aware of the modifications. Your continued use of the website or services constitutes your acceptance of our
                Privacy Policy.
              </p>
            </div>

            <div>
              <h2 id='list-item-11'>How to Contact EastVPN</h2>
              <p>
                If anything mentioned in our Privacy Policy is unclear or you require more clarity on it, then feel free to
                contact us at the following email address:
                <br />
                <br />
                <a href='mailto:support@eastvpnpro.com' className={classes.link__styling}>
                  support@EastVPNpro.com
                </a>
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default PrivacyPolicy
