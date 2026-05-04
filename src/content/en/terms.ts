import type { PageContent } from '../types'

const terms: PageContent = {
  title: 'Terms of Use and Sale',
  lastUpdatedISO: '2026-05-03',
  intro: [
    {
      kind: 'p',
      html: 'These Terms of Use and Sale (the "Terms") govern your access to and use of Gourmetpedia (the "App"), including the free version and any paid subscription offered in the App.',
    },
    {
      kind: 'p',
      html: 'The App is operated by <strong>Quentin Tusset</strong>, based in Liege, Belgium ("we", "us", or "our"). By creating an account, using the App, or purchasing a subscription, you agree to these Terms. If you do not agree, you must not use the App.',
    },
  ],
  sections: [
    {
      id: 'about-gourmetpedia',
      title: '1. About Gourmetpedia',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia is an application that allows users to save, organize, and consult recipes found online, including recipes found through Instagram, TikTok, and other social media platforms. The App also allows users to create, store, synchronize, and share recipes.',
        },
        {
          kind: 'p',
          html: 'Gourmetpedia is not affiliated with, endorsed by, or sponsored by Instagram, TikTok, Meta, ByteDance, or any other social media platform or third-party website.',
        },
      ],
    },
    {
      id: 'contact-and-operator',
      title: '2. Contact and operator information',
      blocks: [
        { kind: 'p', html: 'The App is operated by:' },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Liege, Belgium<br>Email: <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
        {
          kind: 'p',
          html: 'If you have any questions about these Terms, your account, or your subscription, you can contact us at <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>.',
        },
      ],
    },
    {
      id: 'account-registration',
      title: '3. Account registration',
      blocks: [
        {
          kind: 'p',
          html: 'A user account is required to use the App. When you create an account, you must provide accurate and up-to-date information, including your email address and first and last name.',
        },
        {
          kind: 'p',
          html: 'You are responsible for keeping your login credentials confidential and for all activity that occurs through your account. You must notify us immediately if you believe your account has been accessed without authorization.',
        },
        {
          kind: 'p',
          html: 'The App is intended for a general audience. If you are under the age required by law to enter into these Terms in your country, you may use the App only with permission and supervision from a parent or legal guardian.',
        },
      ],
    },
    {
      id: 'free-version',
      title: '4. Free version',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia offers a free version of the App. In the free version, users may save up to <strong>10 recipes</strong>. Additional limits or technical restrictions may apply as displayed in the App.',
        },
        {
          kind: 'p',
          html: 'We may change the features or limits of the free version from time to time. Any such changes will not affect your mandatory consumer rights.',
        },
      ],
    },
    {
      id: 'premium-subscription',
      title: '5. Gourmetpedia Premium subscription',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia may offer a paid subscription, currently presented as an unlimited recipes subscription. Premium features currently include:',
        },
        {
          kind: 'ul',
          items: [
            'unlimited recipes in your library;',
            'secure multi-device sync;',
            'access to other premium features displayed in the App, if any.',
          ],
        },
        { kind: 'p', html: 'The subscription options currently displayed in the App are:' },
        {
          kind: 'ul',
          items: [
            '<strong>Monthly subscription:</strong> USD 2.99 per month;',
            '<strong>Yearly subscription:</strong> USD 19.99 per year.',
          ],
        },
        {
          kind: 'p',
          html: 'Prices may vary by country, currency, taxes, platform fees, promotions, or store settings. The final price, billing period, and applicable taxes are shown in the Apple App Store or Google Play checkout before you confirm the purchase. If there is a difference between the price shown in this document and the price shown in the store checkout, the store checkout price controls the transaction.',
        },
      ],
    },
    {
      id: 'payment-processing',
      title: '6. Payment processing',
      blocks: [
        {
          kind: 'p',
          html: 'All in-app purchases and subscriptions are processed by the platform through which you purchased the subscription, either the Apple App Store or Google Play. We do not directly collect or store your full payment card details.',
        },
        {
          kind: 'p',
          html: 'By purchasing a subscription through Apple or Google, you also agree to the applicable Apple App Store or Google Play terms, payment rules, billing rules, and refund policies.',
        },
        {
          kind: 'p',
          html: 'The App uses RevenueCat to help manage subscription status, purchase entitlements, and restore purchases. The App may also use Firebase for account, authentication, storage, synchronization, and related backend services.',
        },
      ],
    },
    {
      id: 'auto-renewal-and-cancellation',
      title: '7. Auto-renewal and cancellation',
      blocks: [
        {
          kind: 'p',
          html: 'Subscriptions renew automatically unless cancelled through the Apple App Store or Google Play before the end of the current billing period, according to the rules of the platform used for the purchase.',
        },
        {
          kind: 'p',
          html: 'You are responsible for cancelling your subscription through the same platform where you purchased it. Deleting the App or deleting your Gourmetpedia account does <strong>not</strong> automatically cancel your Apple App Store or Google Play subscription.',
        },
        { kind: 'h3', text: 'How to cancel' },
        {
          kind: 'ul',
          items: [
            '<strong>Apple App Store:</strong> open the Settings app on your Apple device, tap your Apple Account name, go to Subscriptions, select Gourmetpedia, and cancel the subscription. Apple also provides subscription support at <a href="https://support.apple.com/billing">support.apple.com/billing</a>.',
            '<strong>Google Play:</strong> open Google Play, go to Payments and subscriptions or Subscriptions, select Gourmetpedia, and cancel the subscription. Google also provides subscription support at <a href="https://support.google.com/googleplay">support.google.com/googleplay</a>.',
          ],
        },
        {
          kind: 'p',
          html: 'After cancellation, you may continue to access paid features until the end of the current paid billing period, unless the platform states otherwise.',
        },
      ],
    },
    {
      id: 'refunds',
      title: '8. Refunds',
      blocks: [
        {
          kind: 'p',
          html: 'Refunds for purchases made through the Apple App Store or Google Play are handled by Apple or Google according to their own refund policies and applicable law. We cannot directly issue refunds for purchases processed by Apple or Google.',
        },
        {
          kind: 'p',
          html: 'If you believe there has been a billing error, contact Apple or Google through the relevant platform support channel. You may also contact us at <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>, but platform purchases remain subject to the platform refund process.',
        },
      ],
    },
    {
      id: 'right-of-withdrawal',
      title: '9. Right of withdrawal for consumers',
      blocks: [
        {
          kind: 'p',
          html: 'If you are a consumer located in the European Economic Area or another jurisdiction with similar consumer protection rules, you may have a statutory right of withdrawal for certain distance contracts.',
        },
        {
          kind: 'p',
          html: 'Because Gourmetpedia subscriptions provide immediate access to digital services and premium features, by confirming your purchase and using premium features, you request immediate performance of the service. To the extent permitted by applicable law, you acknowledge that your withdrawal right may be limited or lost once the digital service has begun.',
        },
        {
          kind: 'p',
          html: 'This section does not limit any mandatory consumer rights you may have under applicable law. Refund or withdrawal requests for subscriptions purchased through Apple or Google must generally be submitted through the relevant platform, unless applicable law provides otherwise.',
        },
      ],
    },
    {
      id: 'user-recipes',
      title: '10. User recipes and shared content',
      blocks: [
        {
          kind: 'p',
          html: 'You may add, save, organize, edit, and share recipes through the App. This includes recipe titles, links, source URLs, ingredients, instructions, notes, categories, images, and other information you choose to enter, where supported by the App.',
        },
        {
          kind: 'p',
          html: 'You remain responsible for all content you add to the App. You must ensure that you have the right to save, use, upload, or share any recipe, text, image, link, or other content you add. You must not use the App to store or share unlawful, harmful, infringing, misleading, confidential, or unauthorized content.',
        },
        {
          kind: 'p',
          html: 'By adding content to the App, you grant us a limited, non-exclusive, worldwide, royalty-free license to host, store, copy, display, format, synchronize, transmit, and process that content only as necessary to operate, secure, provide, and improve the App. If you share a recipe, you authorize us to make that recipe available to the users or recipients you choose.',
        },
        {
          kind: 'p',
          html: 'When you delete content or delete your account, this license ends for the deleted content, except where continued processing is technically or legally necessary or where content has already been accessed, saved, copied, or shared by others outside our control.',
        },
      ],
    },
    {
      id: 'recipes-from-third-parties',
      title: '11. Recipes from websites and social media',
      blocks: [
        {
          kind: 'p',
          html: 'Gourmetpedia may help you save recipes or recipe-related information found online. You are responsible for complying with the terms, copyright rules, and usage restrictions of any third-party website, social media platform, or content source from which you copy, save, or share recipe content.',
        },
        {
          kind: 'p',
          html: 'We do not claim ownership of third-party content and we do not grant you rights to third-party recipes, images, videos, trademarks, or other materials.',
        },
      ],
    },
    {
      id: 'food-allergens-health',
      title: '12. Food, allergens, and health information',
      blocks: [
        {
          kind: 'p',
          html: 'The App is a recipe organization tool. It does not provide medical, nutritional, dietary, allergy, or professional food safety advice.',
        },
        {
          kind: 'p',
          html: 'You are solely responsible for the recipes and information you enter, save, use, or share. You must verify ingredients, allergens, food preparation instructions, cooking times, storage instructions, dietary suitability, and any nutrition or health-related information before using a recipe.',
        },
        {
          kind: 'p',
          html: 'We do not verify user-entered recipes and cannot guarantee that recipes are accurate, safe, complete, suitable for your diet, or free from allergens or other risks.',
        },
      ],
    },
    {
      id: 'prohibited-use',
      title: '13. Prohibited use',
      blocks: [
        { kind: 'p', html: 'You agree not to:' },
        {
          kind: 'ul',
          items: [
            'use the App for unlawful, fraudulent, harmful, or abusive purposes;',
            'upload, save, or share content that infringes intellectual property or privacy rights;',
            'share confidential, sensitive, or personal information that you do not have the right to share;',
            'attempt to access another user account or interfere with the security of the App;',
            'reverse engineer, decompile, copy, resell, or exploit the App except where allowed by mandatory law;',
            'use bots, scraping tools, or automated systems to overload or misuse the App;',
            'use the App in a way that could damage, disable, or impair our services or third-party services.',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: '14. Intellectual property',
      blocks: [
        {
          kind: 'p',
          html: 'The App, its design, software, interfaces, logos, trademarks, branding, and original content are owned by us or our licensors and are protected by applicable intellectual property laws.',
        },
        {
          kind: 'p',
          html: 'These Terms do not transfer any ownership rights in the App to you. Subject to your compliance with these Terms, we grant you a limited, personal, non-exclusive, non-transferable, revocable license to use the App for your own personal purposes.',
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '15. Third-party services',
      blocks: [
        {
          kind: 'p',
          html: 'The App may depend on third-party platforms and services, including Apple App Store, Google Play, RevenueCat, Firebase, hosting providers, and social media or web content sources. These third parties may have their own terms and privacy policies.',
        },
        {
          kind: 'p',
          html: 'We are not responsible for third-party platforms, payment processors, social networks, websites, content, policies, outages, decisions, or refund processes, except where mandatory law provides otherwise.',
        },
      ],
    },
    {
      id: 'availability',
      title: '16. Availability and changes to the App',
      blocks: [
        {
          kind: 'p',
          html: 'We aim to keep Gourmetpedia available and functional, but we do not guarantee that the App will always be uninterrupted, error-free, secure, or available on every device or operating system.',
        },
        {
          kind: 'p',
          html: 'We may update, modify, suspend, or discontinue parts of the App, including features, technical requirements, or free limits. Where a change materially affects paid subscription features, we will try to provide reasonable notice where required by applicable law or platform rules.',
        },
      ],
    },
    {
      id: 'account-deletion-loss',
      title: '17. Account deletion and loss of access',
      blocks: [
        {
          kind: 'p',
          html: 'You can delete your Gourmetpedia account in the App by going to <strong>Profile &gt; Delete account</strong> and confirming the deletion.',
        },
        {
          kind: 'p',
          html: 'Account deletion is <strong>immediate and irreversible</strong>. When you delete your account, Gourmetpedia deletes your account and the data associated with it in Gourmetpedia, including your saved recipes, recipe library, synchronization data, profile information, and account-related content stored by the App.',
        },
        {
          kind: 'p',
          html: 'After account deletion, your recipes, settings, shared recipe records linked to your account, and other account data cannot be restored by Gourmetpedia.',
        },
        {
          kind: 'note',
          html: '<strong>Important:</strong> deleting your Gourmetpedia account does not cancel your Apple App Store or Google Play subscription. You must cancel your subscription separately through Apple or Google. If you delete your account while your subscription is still active, you may lose access to premium features and all data linked to your Gourmetpedia account. You may be able to use Restore Purchases after creating a new account if Apple, Google, and RevenueCat can verify an active entitlement, but restoring a purchase will not restore deleted recipes, deleted settings, or deleted account data.',
        },
        {
          kind: 'p',
          html: 'We do not provide refunds because an account was deleted. Refunds for Apple App Store or Google Play purchases are handled by the relevant platform, unless mandatory law requires otherwise.',
        },
      ],
    },
    {
      id: 'suspension-termination',
      title: '18. Suspension and termination',
      blocks: [
        {
          kind: 'p',
          html: 'We may suspend or terminate your access to the App if you breach these Terms, misuse the App, create legal or security risk, infringe third-party rights, or if we are required to do so by law or by a platform provider.',
        },
        {
          kind: 'p',
          html: 'You may stop using the App at any time. If you have an active subscription, you remain responsible for cancelling it through Apple or Google as described above.',
        },
      ],
    },
    {
      id: 'privacy',
      title: '19. Privacy',
      blocks: [
        {
          kind: 'p',
          html: 'Our collection and use of personal data is described in our Privacy Policy, available in the App and at <a href="https://gourmetpedia.com/privacy">gourmetpedia.com/privacy</a>, if this page is available. The Privacy Policy explains what data we collect, why we collect it, how long we keep it, and how you can request deletion or exercise your rights.',
        },
      ],
    },
    {
      id: 'disclaimer',
      title: '20. Disclaimer of warranties',
      blocks: [
        {
          kind: 'p',
          html: 'To the maximum extent permitted by applicable law, the App is provided on an "as is" and "as available" basis. We do not make any warranty that the App will meet your expectations, that recipes or shared content will be accurate or safe, or that the App will be uninterrupted or error-free.',
        },
        {
          kind: 'p',
          html: 'Nothing in these Terms excludes or limits any warranty, guarantee, or consumer right that cannot be excluded or limited under applicable law.',
        },
      ],
    },
    {
      id: 'liability',
      title: '21. Limitation of liability',
      blocks: [
        {
          kind: 'p',
          html: 'To the maximum extent permitted by applicable law, we are not liable for indirect, incidental, special, consequential, punitive, or loss-of-profit damages arising from your use of the App, your recipes, third-party content, subscription platform issues, or loss of data following account deletion.',
        },
        {
          kind: 'p',
          html: 'Nothing in these Terms limits liability that cannot legally be limited, including liability for fraud, intentional misconduct, or mandatory consumer rights under applicable law.',
        },
      ],
    },
    {
      id: 'changes',
      title: '22. Changes to these Terms',
      blocks: [
        {
          kind: 'p',
          html: 'We may update these Terms from time to time. When we do, we will update the "Last updated" date at the top of this document. If changes are material, we may notify you in the App or by another appropriate method.',
        },
        {
          kind: 'p',
          html: 'Your continued use of the App after updated Terms become effective means that you accept the updated Terms. If you do not agree to the updated Terms, you must stop using the App and, if applicable, cancel your subscription through Apple or Google.',
        },
      ],
    },
    {
      id: 'governing-law',
      title: '23. Governing law and disputes',
      blocks: [
        {
          kind: 'p',
          html: 'These Terms are governed by the laws of Belgium, without prejudice to any mandatory consumer protection rules that apply in your country of residence.',
        },
        {
          kind: 'p',
          html: 'If you are a consumer, you may have the right to bring claims in the courts allowed by mandatory consumer law. Otherwise, the courts of Liege, Belgium, will have jurisdiction over disputes relating to these Terms.',
        },
      ],
    },
    {
      id: 'severability',
      title: '24. Severability',
      blocks: [
        {
          kind: 'p',
          html: 'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to apply. The invalid or unenforceable provision will be interpreted or replaced to the extent necessary to make it valid and enforceable while preserving its original purpose as closely as possible.',
        },
      ],
    },
    {
      id: 'contact',
      title: '25. Contact',
      blocks: [
        {
          kind: 'p',
          html: 'For questions about these Terms, the App, your account, or your subscription, contact:',
        },
        {
          kind: 'p',
          html: '<strong>Quentin Tusset</strong><br>Gourmetpedia<br>Liege, Belgium<br>Email: <a href="mailto:support@gourmetpedia.com">support@gourmetpedia.com</a>',
        },
      ],
    },
  ],
}

export default terms
