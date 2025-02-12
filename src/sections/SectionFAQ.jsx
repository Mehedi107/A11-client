const faqs = [
  {
    title: 'How do we make sure our relics are authentic?',
    answer:
      "Your Certificate of Authenticity is more than just a piece of paper—it's a promise to you. When you buy from History Hoard, you can rest assured that each of your new relics has been thoroughly inspected under the careful eyes of an antiquities specialist. Only items that are 100% certain to be authentic get sent to our customers. Plus, we take great care to source our relics from only vetted antiquities experts, who are also committed to providing genuine and ethically sourced relics.",
  },
  {
    title:
      'How is it possible to own historical items? Should these be in a museum?',
    answer:
      'Actually, many relics are able to be owned by anyone. Typically, museums only want to display items that are either very rare or incredibly well preserved. This leaves many items that don\'t make the cut, and these are able to be owned by individuals. While the items we sell aren\'t "museum grade," they still carry with them the same amount of history and uniqueness. Each relic was still hand made by a person, hundreds or even thousands of years ago.',
  },
  {
    title: 'Are the relics damaged when they are mounted in the display case?',
    answer:
      "One of our core values is not to damage or alter any of the artifacts we sell. History needs to be preserved—after all, there is a limited amount of it that survives—but it is also something to be shared with the masses. For this reason, we put our relics in sturdy display cases that are safe to handle, but are mindful that someday the relic may need to be taken out again. No glue or resin holds the items in place. Instead, we're developed our own method for holding the relics securely in their displays using pressure alone. In fact, any of our relics can be removed in their original condition by simply opening the display case.",
  },
  {
    title: 'Where do these items come from?',
    answer:
      'We make sure to source our relics from only reputable antiquities experts with a track record of providing high quality, genuine items and have high ethical standards. We strive to follow all laws and regulations governing the trade of historical artifacts. Our core mission is about preserving history and sharing it with the masses, so we take the utmost care to do it right.',
  },
  {
    title: 'How will the items I receive vary from the ones in the photos?',
    answer:
      "Your item will be in a similar condition, though specifics like the date or exact imagery shown on a coin or relic may differ. Each item we sell here is extremely unique. Unlike modern coins, early ones were not identical even if they were from the same time period or even made by the same person. Each one was handmade, so imperfections were a natural part of the process. You can be sure of one thing though⁠—we will never send you a coin without any details visible. No matter what, you'll be able to see some if not all of the design that was originally stamped onto it.",
  },
];

const SectionFAQ = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-5 py-20">
        <h2 className="text-center mb-8">Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="collapse collapse-arrow rounded-none mb-2 border-2 border-secondary"
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title md:text-xl font-medium">
              {faq.title}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFAQ;
