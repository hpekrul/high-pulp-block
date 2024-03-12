/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/recipe-list/components/AddRecipeForm.js":
/*!************************************************************!*\
  !*** ./src/blocks/recipe-list/components/AddRecipeForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddRecipeForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/StarRating */ "./src/components/StarRating.js");



class AddRecipeForm extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    title: '',
    details: '',
    rating: 0,
    link: '',
    image_id: ''
  };
  addRecipe(e) {
    e.preventDefault();
    const newRecipe = {
      title: this.state.title,
      content: this.state.details,
      acf: {
        recipe_rating: parseInt(this.state.rating) || 0,
        //recipe_image: this.state.image,
        recipe_url: this.state.link
      },
      featured_media: this.state.image_id,
      // maybe you should validate better before doing this?
      status: 'publish'
    };

    // we can't assume any props are provided
    // ?. only calls the method if it exists
    this.props.addRecipe?.(newRecipe);

    //clear the form
    this.setState({
      title: '',
      details: '',
      rating: 0,
      link: '',
      image_id: ''
    });
  }
  pickImage() {
    var image = wp.media({
      title: 'Upload Image',
      type: 'image',
      multiple: false,
      button: {
        text: 'Done'
      }
    }).open();
    image.on('select', e => {
      var uploaded_image = image.state().get('selection').first();
      var image_id = uploaded_image.toJSON().id;
      // $('input#image-id').val(image_id);
      this.setState({
        image_id: image_id
      });
    });
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "new-recipe-form",
      onSubmit: e => this.addRecipe(e)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      onClick: e => this.pickImage()
    }, "Upload Image")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Recipe Name:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.title,
      onInput: e => this.setState({
        title: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Recipe Details:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      value: this.state.details,
      onInput: e => this.setState({
        details: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Recipe Link:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      value: this.state.link,
      onInput: e => this.setState({
        link: e.target.value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Overall Rating:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_StarRating__WEBPACK_IMPORTED_MODULE_1__["default"], {
      rating: this.state.rating,
      setRating: rating => this.setState({
        rating
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "submit"
    }, "Add Recipe"));
  }
}
;

/***/ }),

/***/ "./src/blocks/recipe-list/components/BlockApp.js":
/*!*******************************************************!*\
  !*** ./src/blocks/recipe-list/components/BlockApp.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddRecipeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddRecipeForm */ "./src/blocks/recipe-list/components/AddRecipeForm.js");
/* harmony import */ var _RecipeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecipeList */ "./src/blocks/recipe-list/components/RecipeList.js");




class BlockApp extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  state = {
    recipes: [],
    loggedIn: null
  };
  addRecipe(newRecipe) {
    const recipe = new wp.api.models.Recipe(newRecipe);
    recipe.save().done(data => {
      console.log('saved!', data);
      this.getRecipes();
    }).fail(jqXHR => {
      console.error('failed', jqXHR);
    });
  }
  getRecipes() {
    // by default, this gives us 10
    const recipeCollection = new wp.api.collections.Recipe();
    recipeCollection.fetch({
      data: {
        _embed: true
      }
    }).done(data => {
      console.log('recipes!', data, recipeCollection);
      // store the models in our state
      this.setState({
        recipes: recipeCollection.models
      });
    }).fail(jxXHR => {
      console.error('failed!', jxXHR);
    });
  }
  getLoggedInUser() {
    const user = new wp.api.models.UsersMe(); //get logged in user
    user.fetch().done(user => {
      //logged in
      this.setState({
        loggedIn: true
      });
    }).fail(jqXHR => {
      //not logged in
      this.setState({
        loggedIn: false
      });
    });
  }

  //when page loads
  componentDidMount() {
    this.getRecipes();
    this.getLoggedInUser(); //get logged in user when page loads.
  }
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Latest Recipes"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RecipeList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      recipes: this.state.recipes
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Submit a Recipe"), this.state.loggedIn === true && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_AddRecipeForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      addRecipe: recipeObj => this.addRecipe(recipeObj)
    }), this.state.loggedIn === false && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "error-msg"
    }, "You must be logged in to submit a review."));
  }
}

/***/ }),

/***/ "./src/blocks/recipe-list/components/RecipeCard.js":
/*!*********************************************************!*\
  !*** ./src/blocks/recipe-list/components/RecipeCard.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecipeCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StarRating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/StarRating */ "./src/components/StarRating.js");



class RecipeCard extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    let {
      title,
      details,
      rating,
      link,
      image_id
    } = this.props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col pt-4"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: image_id,
      className: "card-img-top",
      alt: "..."
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "card-body"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", {
      className: "card-title"
    }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "card-text",
      dangerouslySetInnerHTML: {
        __html: details
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_StarRating__WEBPACK_IMPORTED_MODULE_1__["default"], {
      rating: rating,
      readonly: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: link,
      className: "btn btn-primary mt-5"
    }, "Recipe Details"))));
  }
}

/***/ }),

/***/ "./src/blocks/recipe-list/components/RecipeList.js":
/*!*********************************************************!*\
  !*** ./src/blocks/recipe-list/components/RecipeList.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecipeList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RecipeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecipeCard */ "./src/blocks/recipe-list/components/RecipeCard.js");



class RecipeList extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "recipe-list"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contaier"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, this.props.recipes.map(recipe => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_RecipeCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: recipe.attributes.title.rendered,
      details: recipe.attributes.content.rendered,
      rating: recipe.attributes.acf.recipe_rating,
      link: recipe.attributes.acf.recipe_url,
      image_id: recipe.attributes._embedded?.['wp:featuredmedia']['0']?.media_details?.sizes?.medium?.source_url,
      key: recipe.attributes.id
    })))));
  }
}

/***/ }),

/***/ "./src/components/StarRating.js":
/*!**************************************!*\
  !*** ./src/components/StarRating.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StarRating_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarRating.scss */ "./src/components/StarRating.scss");



function StarRating({
  rating,
  setRating,
  readonly
}) {
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rating || 0);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: readonly ? 'readonly stars' : 'stars'
  }, [1, 2, 3, 4, 5].map(star => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: star <= hover ? 'star on' : 'star off',
      onClick: () => {
        setRating(star);
      },
      onMouseEnter: () => {
        setHover(star);
      },
      onMouseLeave: () => {
        setHover(rating);
      }
    }, "\u2605");
  }));
}

// <StarRating rating="3" setRating={fn} />
// for line below...first set of curly braces shows you want to output a variable.

/***/ }),

/***/ "./src/components/StarRating.scss":
/*!****************************************!*\
  !*** ./src/components/StarRating.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/blocks/recipe-list/view.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_BlockApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlockApp */ "./src/blocks/recipe-list/components/BlockApp.js");



const blocks = document.querySelectorAll('.wp-block-hp-recipe-list');
blocks.forEach(block => {
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(block).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlockApp__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map