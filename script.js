<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Text To Word</title></head><body><p>// Initialize EmailJS</p>
<p>emailjs.init("F_3Ss3kxhTAf4Vvxe");</p>
<p>&nbsp;</p>
<p>const products = [</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Crimson Rose Rakhi",</p>
<p>&nbsp; &nbsp; price: 40,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/6J8LkK3L/Untitled-2.jpg", "https://i.ibb.co/6cMbxCRq/IMG-20250726-WA0005-2.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Round Radiance Rakhi",</p>
<p>&nbsp; &nbsp; price: 29,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/MyJGcdvb/Untitled-1.png", "https://i.ibb.co/C33Wx31C/PXL-20250719-141726150.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Subhadra Rakhi for Krishna",</p>
<p>&nbsp; &nbsp; price: 35,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/7JCLq3NZ/Untitled.png", "https://i.ibb.co/GvD10bPX/IMG-20250719-183903112-HDR-2.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Mayur Rakhi",</p>
<p>&nbsp; &nbsp; price: 49,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/7xRhBnfw/Untitled-3.png", "https://i.ibb.co/k2RDXmkP/IMG-20250719-194159554-HDR.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Morpankh Rakhi",</p>
<p>&nbsp; &nbsp; price: 60,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/1YwnLq49/Untitled-1-4.jpg", "https://i.ibb.co/PZB17wbx/IMG-20250714-WA0059.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Golden Petal Rakhi",</p>
<p>&nbsp; &nbsp; price: 49,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/3mbWpc5t/Untitled.jpg", "https://i.ibb.co/zV1P9yzJ/IMG-20250719-194010737-HDR.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Golden Heart Rakhi",</p>
<p>&nbsp; &nbsp; price: 69,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/XfCq0xs6/Untitled-1.jpg", "https://i.ibb.co/27bPD7mq/IMG-20250714-WA0043.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Golden Om Charm Rakhi",</p>
<p>&nbsp; &nbsp; price: 60,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/N623mj3F/Untitled-1-3.jpg", "https://i.ibb.co/JW09xL71/IMG-20250714-WA0078.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Big Bro Rakhi",</p>
<p>&nbsp; &nbsp; price: 0,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/PvBVWKDc/Untitled-2.jpg", "https://i.ibb.co/ksSGrhs5/IMG-20250719-192946382-HDR.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Telugu Brother Rakhi",</p>
<p>&nbsp; &nbsp; price: 45,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/9k5Bn7T3/IMG-20250714-WA0007-1.jpg", "https://i.ibb.co/Y7JxZn9h/Untitled-1-5.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Swastik Rakhi",</p>
<p>&nbsp; &nbsp; price: 49,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/qYYrBn5P/IMG-20250714-WA0019.jpg", "https://i.ibb.co/yF05FMjG/IMG-20250719-184934776-HDR.jpg"]</p>
<p>&nbsp; },</p>
<p>&nbsp; {</p>
<p>&nbsp; &nbsp; name: "Stone-Studded Bro Rakhi",</p>
<p>&nbsp; &nbsp; price: 45,</p>
<p>&nbsp; &nbsp; images: ["https://i.ibb.co/WNDwnFF7/IMG-20250719-195324622-HDR.jpg", "https://i.ibb.co/TDQFMkX9/IMG-20250719-195255349.jpg"]</p>
<p>&nbsp; }</p>
<p>];</p>
<p>&nbsp;</p>
<p>const cart = {};</p>
<p>&nbsp;</p>
<p>function renderProducts() {</p>
<p>&nbsp; const container = document.getElementById("products");</p>
<p>&nbsp; container.innerHTML = "";</p>
<p>&nbsp;</p>
<p>&nbsp; products.forEach((product, index) =&gt; {</p>
<p>&nbsp; &nbsp; const card = document.createElement("div");</p>
<p>&nbsp; &nbsp; card.className = "product";</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; let currentImgIndex = 0;</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; const img = document.createElement("img");</p>
<p>&nbsp; &nbsp; img.src = product.images[currentImgIndex];</p>
<p>&nbsp; &nbsp; img.alt = product.name;</p>
<p>&nbsp; &nbsp; img.onclick = () =&gt; showFullImage(product.images[currentImgIndex]);</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; const toggleBtn = document.createElement("button");</p>
<p>&nbsp; &nbsp; toggleBtn.textContent = "&gt;";</p>
<p>&nbsp; &nbsp; toggleBtn.className = "toggle-btn";</p>
<p>&nbsp; &nbsp; toggleBtn.onclick = () =&gt; {</p>
<p>&nbsp; &nbsp; &nbsp; currentImgIndex = (currentImgIndex + 1) % product.images.length;</p>
<p>&nbsp; &nbsp; &nbsp; img.src = product.images[currentImgIndex];</p>
<p>&nbsp; &nbsp; };</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; card.innerHTML += `</p>
<p>&nbsp; &nbsp; &nbsp; &lt;h3&gt;${product.name}&lt;/h3&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &lt;p&gt;₹${product.price}&lt;/p&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &lt;div class="controls"&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;button onclick="updateQty(${index}, -1)"&gt;-&lt;/button&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;span id="qty-${index}"&gt;0&lt;/span&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;button onclick="updateQty(${index}, 1)"&gt;+&lt;/button&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &lt;/div&gt;</p>
<p>&nbsp; &nbsp; `;</p>
<p>&nbsp;</p>
<p>&nbsp; &nbsp; card.prepend(toggleBtn);</p>
<p>&nbsp; &nbsp; card.prepend(img);</p>
<p>&nbsp; &nbsp; container.appendChild(card);</p>
<p>&nbsp; });</p>
<p>}</p>
<p>&nbsp;</p>
<p>function updateQty(index, delta) {</p>
<p>&nbsp; const product = products[index];</p>
<p>&nbsp; if (!cart[product.name]) {</p>
<p>&nbsp; &nbsp; cart[product.name] = { quantity: 0, price: product.price };</p>
<p>&nbsp; }</p>
<p>&nbsp; cart[product.name].quantity += delta;</p>
<p>&nbsp; if (cart[product.name].quantity &lt; 0) cart[product.name].quantity = 0;</p>
<p>&nbsp; document.getElementById(`qty-${index}`).innerText = cart[product.name].quantity;</p>
<p>&nbsp; updateCartDisplay();</p>
<p>}</p>
<p>&nbsp;</p>
<p>function updateCartDisplay() {</p>
<p>&nbsp; const items = [];</p>
<p>&nbsp; let total = 0;</p>
<p>&nbsp; for (const name in cart) {</p>
<p>&nbsp; &nbsp; const item = cart[name];</p>
<p>&nbsp; &nbsp; if (item.quantity &gt; 0) {</p>
<p>&nbsp; &nbsp; &nbsp; items.push(`${name} &times; ${item.quantity} = ₹${item.price * item.quantity}`);</p>
<p>&nbsp; &nbsp; &nbsp; total += item.price * item.quantity;</p>
<p>&nbsp; &nbsp; }</p>
<p>&nbsp; }</p>
<p>&nbsp; document.getElementById("orderItems").value = items.join("\n");</p>
<p>&nbsp; document.getElementById("orderTotal").value = `₹${total}`;</p>
<p>}</p>
<p>&nbsp;</p>
<p>function showFullImage(url) {</p>
<p>&nbsp; document.getElementById("imageModal").style.display = "block";</p>
<p>&nbsp; document.getElementById("fullImg").src = url;</p>
<p>}</p>
<p>&nbsp;</p>
<p>document.querySelector(".close").onclick = () =&gt; {</p>
<p>&nbsp; document.getElementById("imageModal").style.display = "none";</p>
<p>};</p>
<p>&nbsp;</p>
<p>document.getElementById("orderForm").addEventListener("submit", function (e) {</p>
<p>&nbsp; e.preventDefault();</p>
<p>&nbsp; const form = this;</p>
<p>&nbsp;</p>
<p>&nbsp; // Prepare order summary and total</p>
<p>&nbsp; const orderSummary = Object.entries(cart)</p>
<p>&nbsp; &nbsp; .filter(([_, item]) =&gt; item.quantity &gt; 0)</p>
<p>&nbsp; &nbsp; .map(([name, item]) =&gt;</p>
<p>&nbsp; &nbsp; &nbsp; `${name} - ₹${item.price} &times; ${item.quantity} = ₹${item.price * item.quantity}`</p>
<p>&nbsp; &nbsp; ).join('\n');</p>
<p>&nbsp;</p>
<p>&nbsp; const totalAmount = Object.values(cart)</p>
<p>&nbsp; &nbsp; .reduce((total, item) =&gt; total + (item.price * item.quantity), 0);</p>
<p>&nbsp;</p>
<p>&nbsp; // Set values in hidden form fields</p>
<p>&nbsp; document.getElementById("orderItems").value = orderSummary;</p>
<p>&nbsp; document.getElementById("orderTotal").value = `₹${totalAmount}`;</p>
<p>&nbsp;</p>
<p>&nbsp; // Send email via EmailJS</p>
<p>&nbsp; emailjs.sendForm('service_9hm9wee', 'template_ga2ypz9', form)</p>
<p>&nbsp; &nbsp; .then(() =&gt; {</p>
<p>&nbsp; &nbsp; &nbsp; document.getElementById("formStatus").textContent = "Order sent successfully!";</p>
<p>&nbsp; &nbsp; &nbsp; form.reset();</p>
<p>&nbsp; &nbsp; &nbsp; for (const key in cart) delete cart[key];</p>
<p>&nbsp; &nbsp; &nbsp; updateCartDisplay();</p>
<p>&nbsp; &nbsp; })</p>
<p>&nbsp; &nbsp; .catch(error =&gt; {</p>
<p>&nbsp; &nbsp; &nbsp; console.error(error);</p>
<p>&nbsp; &nbsp; &nbsp; document.getElementById("formStatus").textContent = "Failed to send order. Try again.";</p>
<p>&nbsp; &nbsp; });</p>
<p>});</p>
<p>&nbsp;</p>
<p>renderProducts();</p></body></html>