import type { PageContent } from '../types'

const privacy: PageContent = {
  title: 'Privacy Policy',
  lastUpdatedISO: '2026-05-06',
  intro: [
    {
      kind: 'p',
      html: 'This Privacy Policy explains how Quentin Tusset, based in Liege, Belgium ("we", "us", or "our"), collects, uses, stores, and protects information when you use Gourmetpedia (the "App").',
    },
    {
      kind: 'p',
      html: 'Gourmetpedia is an application that allows users to save, organize, sync, and consult recipes found online, including from Instagram, TikTok, and other social media platforms.',
    },
    {
      kind: 'p',
      html: 'By using the App, you acknowledge that you have read and understood this Privacy Policy.',
    },
  ],
  sections: [
    {
      id: 'data-controller',
      title: '1. Data controller',
      blocks: [
        { kind: 'p', html: 'The App is operated by:' },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Liege, Belgium<br>Email: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '2. Information we collect',
      blocks: [
        {
          kind: 'p',
          html: 'We aim to collect only the information necessary to operate the App, provide accounts, enable synchronization, and manage subscriptions.',
        },
        {
          kind: 'p',
          html: 'Depending on how you use the App, we may collect the following categories of information:',
        },
        { kind: 'h3', text: 'Account information' },
        {
          kind: 'ul',
          items: [
            'email address;',
            'first name and last name;',
            'account identifier;',
            'account creation date and account settings.',
          ],
        },
        { kind: 'h3', text: 'Recipe and user content' },
        {
          kind: 'ul',
          items: [
            'recipes you save, create, organize, or edit in the App;',
            'recipe links or source URLs that you add to the App;',
            'recipe notes, titles, ingredients, instructions, categories, or other information that you choose to enter;',
            'content that you choose to share with other users or through sharing features.',
          ],
        },
        {
          kind: 'p',
          html: 'You are responsible for the content you add to your recipes. You should avoid including personal, sensitive, confidential, or third-party information in your recipes unless you have the right to do so.',
        },
        { kind: 'h3', text: 'Subscription and purchase information' },
        {
          kind: 'ul',
          items: [
            'subscription status, such as whether your subscription is active, expired, cancelled, or in a trial period;',
            'purchase history and entitlement information necessary to provide premium access;',
            'store-related transaction identifiers or receipts processed through Apple App Store or Google Play;',
            'information received through RevenueCat to manage subscriptions and restore purchases.',
          ],
        },
        {
          kind: 'p',
          html: 'We do not directly collect or store your full payment card details. Payments and billing are handled by Apple App Store or Google Play, depending on the platform used. Their own terms and privacy policies apply to payment processing.',
        },
        { kind: 'h3', text: 'Technical information' },
        {
          kind: 'ul',
          items: [
            'device type, operating system, and app version;',
            'IP address or approximate network information;',
            'Firebase identifiers and authentication-related data;',
            'logs, crash information, and diagnostic data needed to maintain security, reliability, and performance.',
          ],
        },
        { kind: 'h3', text: 'Support communications' },
        {
          kind: 'ul',
          items: [
            'your email address;',
            'the content of your support request;',
            'information necessary to investigate and respond to your request.',
          ],
        },
      ],
    },
    {
      id: 'information-not-collected',
      title: '3. Information we do not intentionally collect',
      blocks: [
        {
          kind: 'p',
          html: 'Unless clearly stated otherwise, we do not intentionally collect:',
        },
        {
          kind: 'ul',
          items: [
            'precise GPS location;',
            'health data;',
            'biometric data;',
            'contacts from your device;',
            'photos, videos, or files from your device, unless you choose to provide them through the App;',
            'payment card numbers;',
            'advertising identifiers for targeted advertising.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-information',
      title: '4. How we use your information',
      blocks: [
        { kind: 'p', html: 'We use your information for the following purposes:' },
        {
          kind: 'ul',
          items: [
            'to create, authenticate, and manage your account;',
            'to let you save, organize, sync, and consult recipes across devices;',
            'to provide the free version of the App, including the limit of 10 recipes;',
            'to manage paid subscriptions and premium access;',
            'to restore purchases where supported by Apple, Google, and RevenueCat;',
            'to provide customer support;',
            'to maintain the security, reliability, and performance of the App;',
            'to detect and prevent fraud, misuse, unauthorized access, or technical abuse;',
            'to comply with legal, tax, accounting, consumer protection, and regulatory obligations where applicable.',
          ],
        },
      ],
    },
    {
      id: 'legal-basis',
      title: '5. Legal basis for processing',
      blocks: [
        {
          kind: 'p',
          html: 'If you are located in the European Economic Area, we process personal data based on one or more of the following legal bases:',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Performance of a contract:</strong> to provide the App, manage your account, sync recipes, and provide subscription features;',
            '<strong>Legal obligation:</strong> to comply with applicable legal, tax, accounting, consumer protection, or regulatory requirements;',
            '<strong>Legitimate interests:</strong> to secure the App, prevent fraud, maintain service reliability, and respond to support requests;',
            '<strong>Consent:</strong> where we ask for your consent for a specific processing activity.',
          ],
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '6. Third-party services',
      blocks: [
        {
          kind: 'p',
          html: 'We may use trusted third-party service providers to operate the App. These providers may process limited information on our behalf or as independent providers, depending on the service.',
        },
        {
          kind: 'ul',
          items: [
            '<strong>Firebase:</strong> used for authentication, database, storage, synchronization, infrastructure, diagnostics, or related backend services;',
            '<strong>RevenueCat:</strong> used to manage subscriptions, entitlements, purchase status, and purchase restoration;',
            '<strong>Apple App Store and Google Play:</strong> used to process in-app purchases and subscriptions.',
          ],
        },
        {
          kind: 'p',
          html: 'These services may process information according to their own privacy policies and applicable laws. We do not sell your personal data.',
        },
      ],
    },
    {
      id: 'sharing-recipes',
      title: '7. Sharing and visibility of recipes',
      blocks: [
        {
          kind: 'p',
          html: 'Recipes saved in your account are linked to your Gourmetpedia account and may be synchronized across your devices.',
        },
        {
          kind: 'p',
          html: 'If you use a sharing feature, the recipe content you choose to share may become accessible to the people or audience selected through that feature. You are responsible for ensuring that any content you share is lawful, accurate, and does not infringe the rights of others.',
        },
      ],
    },
    {
      id: 'international-transfers',
      title: '8. International transfers',
      blocks: [
        {
          kind: 'p',
          html: 'Some service providers, including Firebase, RevenueCat, Apple, or Google, may process information outside Belgium, the European Economic Area, or your country of residence. Where required, appropriate safeguards are used under applicable data protection laws.',
        },
      ],
    },
    {
      id: 'data-retention',
      title: '9. Data retention',
      blocks: [
        {
          kind: 'p',
          html: 'We keep personal data only for as long as necessary for the purposes described in this Privacy Policy.',
        },
        {
          kind: 'ul',
          items: [
            'Account data is kept while your account remains active.',
            'Recipes and related user content are kept while they remain saved in your account.',
            'Subscription status and entitlement information are kept as needed to provide premium access and support purchase restoration.',
            'Support communications may be kept for as long as necessary to respond to your request and maintain a record of our communications.',
          ],
        },
        {
          kind: 'p',
          html: 'When your data is no longer needed, or when your account is deleted, we delete or anonymize it where possible, except where retention is required by law or by the policies of third-party providers such as Apple, Google, Firebase, or RevenueCat.',
        },
      ],
    },
    {
      id: 'account-deletion',
      title: '10. Account deletion and consequences for purchases',
      blocks: [
        {
          kind: 'p',
          html: 'You may delete your account directly in the App by going to: <strong>Profile &gt; Delete Account</strong>.',
        },
        {
          kind: 'p',
          html: 'When you confirm account deletion, the deletion is intended to take effect immediately on Gourmetpedia. Your Gourmetpedia account information, saved recipes, and data associated with your account are deleted from our active systems. This action is irreversible. Once your account and recipes are deleted, we cannot restore them.',
        },
        {
          kind: 'p',
          html: 'Deleting your Gourmetpedia account may cause you to lose access to premium features, saved recipes, synchronized data, and any App access or content linked to that Gourmetpedia account.',
        },
        {
          kind: 'note',
          html: '<strong>Important:</strong> deleting your Gourmetpedia account does not automatically cancel your Apple App Store or Google Play subscription. If you have an active subscription, you must cancel it separately through your Apple ID subscription settings or your Google Play subscription settings to avoid future renewals.',
        },
        {
          kind: 'p',
          html: 'Apple, Google, and RevenueCat may retain purchase records, subscription receipts, and related transaction information according to their own legal obligations and policies. If you create a new Gourmetpedia account after deletion, deleted recipes and deleted account data cannot be recovered. If your Apple or Google subscription is still active, you may use the App\'s restore purchase option where available, but this will not restore deleted recipes or deleted account data.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: '11. Your rights',
      blocks: [
        { kind: 'p', html: 'Depending on your location, you may have the right to:' },
        {
          kind: 'ul',
          items: [
            'access the personal data we hold about you;',
            'request correction of inaccurate personal data;',
            'request deletion of your personal data;',
            'object to certain processing activities;',
            'request restriction of processing;',
            'request a copy of your personal data;',
            'withdraw consent where processing is based on consent;',
            'lodge a complaint with a competent data protection authority.',
          ],
        },
        {
          kind: 'p',
          html: 'To exercise your rights, contact us at: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>. We may need to verify your identity before responding to your request.',
        },
      ],
    },
    {
      id: 'security',
      title: '12. Security',
      blocks: [
        {
          kind: 'p',
          html: 'We use reasonable technical and organizational measures to protect your information against unauthorized access, loss, misuse, alteration, or disclosure. However, no system is completely secure, and we cannot guarantee absolute security.',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      title: "13. Children's privacy",
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia is intended for a general audience. If you are under the age required by the laws of your country to consent to the use of online services, you must use the App only with the consent and supervision of a parent or legal guardian.',
        },
        {
          kind: 'p',
          html: 'We do not knowingly collect personal data from children without appropriate consent where required by law. If you believe that a child has provided personal data without appropriate consent, please contact us at <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>.',
        },
      ],
    },
    {
      id: 'changes',
      title: '14. Changes to this Privacy Policy',
      blocks: [
        {
          kind: 'p',
          html: 'We may update this Privacy Policy from time to time. When we make changes, we will update the "Last updated" date at the top of this document. If the changes are significant, we may notify you through the App or by other appropriate means.',
        },
      ],
    },
    {
      id: 'contact',
      title: '15. Contact',
      blocks: [
        {
          kind: 'p',
          html: 'For questions about this Privacy Policy or how we handle personal data, contact us at:',
        },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Gourmetpedia<br>Liege, Belgium<br>Email: <a href="mailto:support@getgourmetpedia.com">support@getgourmetpedia.com</a>',
        },
      ],
    },
  ],
}

export default privacy
