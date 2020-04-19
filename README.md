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
<b>target:</b> CSS path selector query defination to find target elements to animate. <i> Default:null</i> <br>
<b>style:</b> Target style propery template to manuplate. Must contain <b>{v}</b> mark up on numerical part that will   be replaced automatically. <i> Default:null</i><br>
<b>delay:</b> Speed of animation in miliseconds. Lower is faster.  <i> Default20/i><br>
<b>min:</b> Minimum value of target css property  <i> Default:0</i><br>
<b>max:</b> Maximum value of target css property  <i> Default:5</i><br>
<b>Frames:<b> Total animation  frame count that indicates  duration of animatin  <i> Default:50/i><br>
<b>loop:</b> Animation will continue until cancel  <i> Default:false</>
<b>focus:</b> Page will scroll to target element when animation started.  <i> Default:true</i><br>
<br>
<h3>Methods</h3><br>
<b>Play():</b>  Starts animation. Will be called on constructor. <br>
 <b>Stop():<b> Stops animation any time. <br>
 <b>Focus():</b> Scroll to target dom element <br>
  
