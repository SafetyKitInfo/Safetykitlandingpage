export default function ContactForm(){
  async function handleSubmit(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = Object.fromEntries(fd.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        alert('Thanks — we received your message.');
        e.target.reset();
      } else {
        alert('Sorry, something went wrong.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    }
  }

  return (
    <section id="contact" className="py-16 bg-teal-50">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold">Contact Us</h3>
        <p className="text-gray-700 mt-2">Questions, demos, or partnerships — drop us a message.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="p-3 rounded border" />
            <input name="email" type="email" required placeholder="Email" className="p-3 rounded border" />
          </div>
          <textarea name="message" required rows="5" placeholder="How can we help?" className="p-3 rounded border"></textarea>

          <div className="flex gap-4">
            <button type="submit" className="bg-teal-500 text-white px-5 py-3 rounded-md hover:bg-teal-600">Send Message</button>
            <a href="mailto:hello@safetykit.example" className="px-5 py-3 rounded-md border">Or email us</a>
          </div>
        </form>
      </div>
    </section>
  )
}
