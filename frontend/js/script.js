const filterButtons = document.querySelectorAll(".filter-button");
const galleryCards = document.querySelectorAll(".gallery-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.filter;

        filterButtons.forEach(function (currentButton) {
            currentButton.classList.remove("active");
        });

        button.classList.add("active");

        galleryCards.forEach(function (card) {
            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});


const eventButtons = document.querySelectorAll(".event-details-button");

const detailTitle = document.getElementById("detail-title");
const detailDate = document.getElementById("detail-date");
const detailLocation = document.getElementById("detail-location");
const detailDescription = document.getElementById("detail-description");
const eventDetailPanel = document.getElementById("event-detail-panel");

eventButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const eventTitle = button.dataset.title;
        const eventDate = button.dataset.date;
        const eventLocation = button.dataset.location;
        const eventDescription = button.dataset.description;

        detailTitle.textContent = eventTitle;
        detailDate.textContent = "Date: " + eventDate;
        detailLocation.textContent = "Location: " + eventLocation;
        detailDescription.textContent = eventDescription;

        eventDetailPanel.scrollIntoView({
            behavior: "smooth"
        });
    });
});

const artworkForm = document.getElementById("artwork-form");

if (artworkForm) {
    artworkForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const artistName = document.getElementById("artist-name");
        const artistEmail = document.getElementById("artist-email");
        const artworkTitle = document.getElementById("artwork-title");
        const artworkCategory =
            document.getElementById("artwork-category");
        const artworkPrice = document.getElementById("artwork-price");
        const artworkDescription =
            document.getElementById("artwork-description");

        const artistNameError =
            document.getElementById("artist-name-error");
        const emailError =
            document.getElementById("email-error");
        const titleError =
            document.getElementById("title-error");
        const categoryError =
            document.getElementById("category-error");
        const priceError =
            document.getElementById("price-error");
        const descriptionError =
            document.getElementById("description-error");

        const successMessage =
            document.getElementById("form-success-message");

        let formIsValid = true;

        clearFormErrors();

        if (artistName.value.trim() === "") {
            showFormError(
                artistName,
                artistNameError,
                "Please enter the artist's name."
            );

            formIsValid = false;
        }

        if (artistEmail.value.trim() === "") {
            showFormError(
                artistEmail,
                emailError,
                "Please enter an email address."
            );

            formIsValid = false;
        } else if (!isValidEmail(artistEmail.value.trim())) {
            showFormError(
                artistEmail,
                emailError,
                "Please enter a valid email address."
            );

            formIsValid = false;
        }

        if (artworkTitle.value.trim() === "") {
            showFormError(
                artworkTitle,
                titleError,
                "Please enter the artwork title."
            );

            formIsValid = false;
        }

        if (artworkCategory.value === "") {
            showFormError(
                artworkCategory,
                categoryError,
                "Please select an artwork category."
            );

            formIsValid = false;
        }

        if (artworkPrice.value.trim() === "") {
            showFormError(
                artworkPrice,
                priceError,
                "Please enter a price or enter 0."
            );

            formIsValid = false;
        } else if (
            Number.isNaN(Number(artworkPrice.value)) ||
            Number(artworkPrice.value) < 0
        ) {
            showFormError(
                artworkPrice,
                priceError,
                "The price must be 0 or a positive number."
            );

            formIsValid = false;
        }

        if (artworkDescription.value.trim() === "") {
            showFormError(
                artworkDescription,
                descriptionError,
                "Please enter a description of the artwork."
            );

            formIsValid = false;
        }

        if (formIsValid) {
            successMessage.textContent =
                "Your artwork information was submitted successfully.";

            artworkForm.reset();
        }

        function clearFormErrors() {
            const fields = [
                artistName,
                artistEmail,
                artworkTitle,
                artworkCategory,
                artworkPrice,
                artworkDescription
            ];

            const errorMessages = [
                artistNameError,
                emailError,
                titleError,
                categoryError,
                priceError,
                descriptionError
            ];

            fields.forEach(function (field) {
                field.classList.remove("input-error");
            });

            errorMessages.forEach(function (message) {
                message.textContent = "";
            });

            successMessage.textContent = "";
        }
    });
}

function showFormError(field, errorElement, message) {
    field.classList.add("input-error");
    errorElement.textContent = message;
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const faqItem = question.parentElement;
        const faqIcon = question.querySelector(".faq-icon");

        faqItem.classList.toggle("active");

        if (faqItem.classList.contains("active")) {
            faqIcon.textContent = "−";
        } else {
            faqIcon.textContent = "+";
        }
    });
});
