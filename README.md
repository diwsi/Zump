Zump.js is a tiny javascript code  to animate CSS properties of any dom element to garb user's attention.
#
                                 Click Here to View Online Demo! 
<h3>Basic Usage</h3><br>
Create a zump object with a configuration.<br><br>
 var z = new Zump({<br>
  target:'.btn-primary',<br>
  delay: 20,<br>
  max:5,<br>
  min:-5,<br>
  style:'margin-top:{v}px'<br>
});<br>
<br>
<h3>Properties</h3><br>
<b>target:</b>CSS path selector query defination to find target elements to animate. <br>
<b>style:</b> Target style propery template to manuplate. Must contain <b>{v}</b> mark up on numerical part that will   be replaced automatically
