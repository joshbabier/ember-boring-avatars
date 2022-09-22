ember-boring-avatars
==============================================================================

Ember boring avatars is a tiny JavaScript Ember addon that generates custom, SVG-based avatars from any username and color palette.  
NOTE: This is an Ember port of the popular [Boring avatars](https://github.com/boringdesigners/boring-avatars) React library.  
Furthermore, at this time, it only supports the Beam variant of the original library and there is no service.  
In the future, all the variants may be supported and a service added.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-boring-avatars
```


Usage
------------------------------------------------------------------------------

```hbs
<Avatar
  @size={{40}}
  @name="Maria Mitchell"
  @colors={{array "#92A1C6" "#146A7C" "#F0AB3D" "#C271B4" "#C20D90"}}
/>
```

### Attributes

| Attribute    | Type                                                         |
| ------------ | ------------------------------------------------------------ |
| size         | number or string, `40px` (default)                           |
| square       | boolean: `false` (default)                                   |
| title        | boolean: `false` (default)                                   |
| name         | string                                                       |
| colors       | array of colors


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
