// Compiled using marko@4.18.20 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeJS$1.0.0/src/app/views/livros/lista/lista.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head> </head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Livros </h1><table id=\"livros\"><tr><td>ID</td><td>Título</td><td>Preço</td><td>Editar</td><td>Remover</td></tr>");

  var $for$0 = 0;

  marko_forEach(data.livros, function(livro) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "livro_" + livro.id) +
      "><td>" +
      marko_escapeXml(livro.id) +
      "</td><td>" +
      marko_escapeXml(livro.titulo) +
      "</td><td>" +
      marko_escapeXml(livro.preco) +
      "</td><td><a href=\"#\">Editar</a></td><td><a href=\"#\"" +
      marko_attr("data-ref", "" + livro.id) +
      " data-type=\"remove\">Remover</a></td></tr>");
  });

  out.w("</table><script src=\"/estatico/js/remove-livro.js\"> </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "19");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeJS$1.0.0/src/app/views/livros/lista/lista.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
