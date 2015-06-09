# scrollup

simple plugin to go to page top

<a href="http://kudago.github.io/scrollup/">demo</a>

# usage

$ npm install scrollup

create new element with default options:
<pre>
new ScrollUp()
</pre>

or
<pre>
var el = document.querySelector('.myelem')
new ScrollUp(el,{
//options
})
</pre>

#options

<table>
<thead>
<tr>
<th>options</th>
<th>default</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>scrollDistance</code></td>
<td><code>900</code></td>
<td>define when scrollup appear</td>
</tr>
<tr>
<td><code>animateScrollDuration</code></td>
<td><code>500</code></td>
<td></td>
</tr>
<tr>
<td><code>ease</code></td>
<td><code>"out-cube"</code></td>
<td>set ease effect (view for more: <a href="https://github.com/component/ease">ease</a>)</td>
</tr>
<tr>
<td><code>appendEl</code></td>
<td><code>body</code></td>
<td>where scroll el append</td>
</tr>
</tbody>
</table>
