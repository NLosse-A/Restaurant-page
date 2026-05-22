/* ========================= */
/* MODAL FUNCTIONS */
/* ========================= */

const modal = document.getElementById("reservationModal");

function openModal() {
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

/* Cerrar al hacer clic en el backdrop */
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
        closeModal();
    }
});

/* ========================= */
/* BACK TO TOP */
/* ========================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    const shouldShow = window.scrollY > 400;
    backToTop.classList.toggle("active", shouldShow);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});