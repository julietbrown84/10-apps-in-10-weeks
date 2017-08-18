Learning Backbone:

Outcomes:

Learnings:

Pros:

Cons:

The need for Backbone.js

Generally, we use JavaScript to handle UI events (click, keypress, etc), to process the UI data (innerHTML, etc) and to render DOM elements (appendChild, etc).
Without a framework like Backbone.js, each developer would implement the above logic in his/her own coding style. This might cause some maintenance issues if multiple developers are involved.
Backbone.js provides a structure to do the above operations so that it is easy to write a maintainable code with less effort.
With Backbone, you get the following constructs:
Model - used to represent your application data. For example, an Employee model.
Collection - used to hold a list of your model objects. For example, an Employees collection which contains a list of Employee model.
Views - each model & collection can be associated with a Backbone view. You can also create a view for an existing DOM element so that the view can respond to events generated from that DOM element.

Models:

Are the 'heart' of every application. It contains the interactive data and the logic surrounding it, such as data validation, getters and setters, default values, data initialization, conversions and so on. For our example, we are going to create a model called Todo, which will store a string of text (title) and whether the task has been completed or not.

Collections:

Collections allows to save data (in database, file, memory), and it requires a reference to it. Therefore, you need to specify the url parameter with a relative url, where the model’s resource would be located on the server. Otherwise, you will get errors like:
